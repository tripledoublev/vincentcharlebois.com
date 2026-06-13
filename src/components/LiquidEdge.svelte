<script>
	import { onMount, onDestroy } from 'svelte';

	export let tension = 0.02;
	export let damping = 0.82;
	export let influenceRadius = 130;
	export let influenceStrength = 0.12;
	export let strokeWidth = 1;
	export let segments = 64;

	let svgEl;
	let pathEl;
	let wrapper;
	let raf;
	let width = 1000;
	const viewHeight = 40;
	const restY = viewHeight / 2;

	let points = [];
	let pointer = { x: -9999, y: -9999, active: false };
	let reducedMotion = false;

	function initPoints() {
		points = new Array(segments + 1).fill(0).map((_, i) => ({
			x: (i / segments) * width,
			y: restY,
			vy: 0
		}));
	}

	function buildPath() {
		if (points.length < 2) return '';
		let d = `M ${points[0].x} ${points[0].y}`;
		for (let i = 1; i < points.length - 1; i++) {
			const cx = (points[i].x + points[i + 1].x) / 2;
			const cy = (points[i].y + points[i + 1].y) / 2;
			d += ` Q ${points[i].x} ${points[i].y} ${cx} ${cy}`;
		}
		const last = points[points.length - 1];
		d += ` T ${last.x} ${last.y}`;
		return d;
	}

	function tick() {
		const rect = wrapper?.getBoundingClientRect();
		const scaleX = rect ? width / rect.width : 1;

		// pointer influence — bidirectional: pulls the edge toward the cursor
		if (pointer.active && rect) {
			const px = (pointer.x - rect.left) * scaleX;
			// cursor y in svg-space (svg sits at bottom: -20px, height 40px)
			const cursorYInSvg = pointer.y - (rect.bottom - 20);
			const verticalDelta = cursorYInSvg - restY; // negative = above rest, positive = below
			const verticalReach = 55; // px (svg-space) of effective vertical pull range
			const verticalFalloff = Math.exp(
				-(verticalDelta * verticalDelta) / (verticalReach * verticalReach)
			);
			const radiusInView = influenceRadius * scaleX;
			for (const p of points) {
				const dx = p.x - px;
				const dist = Math.abs(dx);
				if (dist < radiusInView) {
					const falloff = Math.exp(-(dx * dx) / (radiusInView * radiusInView * 0.5));
					const target = restY + verticalDelta * verticalFalloff * falloff;
					p.vy += (target - p.y) * influenceStrength;
				}
			}
		}

		// spring + damping
		for (const p of points) {
			const force = (restY - p.y) * tension;
			p.vy = (p.vy + force) * damping;
			p.y += p.vy;
		}

		// neighbor coupling for liquid feel
		for (let pass = 0; pass < 2; pass++) {
			for (let i = 1; i < points.length - 1; i++) {
				const avg = (points[i - 1].y + points[i + 1].y) * 0.5;
				points[i].y += (avg - points[i].y) * 0.18;
			}
		}

		if (pathEl) pathEl.setAttribute('d', buildPath());
		raf = requestAnimationFrame(tick);
	}

	const activationBand = 90; // px above/below the rest line that counts as "active"

	function onPointerMove(e) {
		pointer.x = e.clientX;
		pointer.y = e.clientY;
		if (!wrapper) return;
		const rect = wrapper.getBoundingClientRect();
		const restLineY = rect.bottom; // svg rest line aligns with nav bottom edge
		pointer.active = Math.abs(e.clientY - restLineY) < activationBand;
	}

	function onResize() {
		if (!wrapper) return;
		const rect = wrapper.getBoundingClientRect();
		width = Math.max(1, Math.round(rect.width));
		initPoints();
		if (svgEl) svgEl.setAttribute('viewBox', `0 0 ${width} ${viewHeight}`);
	}

	onMount(() => {
		wrapper = svgEl.parentElement;
		const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
		reducedMotion = mql.matches;

		onResize();

		if (reducedMotion) return;

		window.addEventListener('resize', onResize);
		window.addEventListener('pointermove', onPointerMove);

		raf = requestAnimationFrame(tick);
	});

	onDestroy(() => {
		if (raf) cancelAnimationFrame(raf);
		if (typeof window === 'undefined') return;
		window.removeEventListener('resize', onResize);
		window.removeEventListener('pointermove', onPointerMove);
	});
</script>

<svg
	bind:this={svgEl}
	class="liquid-edge"
	class:static={reducedMotion}
	viewBox="0 0 1000 40"
	preserveAspectRatio="none"
	aria-hidden="true"
>
	{#if reducedMotion}
		<line x1="0" y1={restY} x2="1000" y2={restY} stroke="currentColor" stroke-width={strokeWidth} />
	{:else}
		<path
			bind:this={pathEl}
			fill="none"
			stroke="currentColor"
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	{/if}
</svg>

<style>
	.liquid-edge {
		position: absolute;
		left: 0;
		right: 0;
		bottom: -20px;
		width: 100%;
		height: 40px;
		pointer-events: none;
		color: var(--line);
		z-index: 1;
		overflow: visible;
		transition: color var(--theme-transition-duration) var(--theme-transition-easing);
	}
</style>
