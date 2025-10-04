<script>
	import SEO from '$components/SEO.svelte';
	import { onMount } from 'svelte';

	export let data;

	let currentRole = '';
	let roleIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let isExpanded = false;
	let isExpanding = false;
	let typingInterval;
	let expandedText = '';
	let expandIndex = 0;
	let remainingRoles = [];

	const roles = [
		'un artiste intermédiatique',
		'un développeur logiciel',
		'un planteur d\'arbres',
		'un explorateur de l\'internet',
		'un développeur full-stack',
		'un artiste performatif',
		'un membre de hypha worker co-op',
		'un technologue coopératif',
		'un artiste-chercheur'
	];

	function shuffleArray(array) {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	onMount(() => {
		remainingRoles = shuffleArray(roles);
		roleIndex = 0;
		typeWriter();
	});

	function typeWriter() {
		if (isExpanded) return;

		const current = remainingRoles[roleIndex];

		if (!isDeleting && charIndex < current.length) {
			currentRole = current.substring(0, charIndex + 1);
			charIndex++;
			typingInterval = setTimeout(typeWriter, 80);
		} else if (isDeleting && charIndex > 0) {
			currentRole = current.substring(0, charIndex - 1);
			charIndex--;
			typingInterval = setTimeout(typeWriter, 40);
		} else if (!isDeleting && charIndex === current.length) {
			typingInterval = setTimeout(() => {
				isDeleting = true;
				typeWriter();
			}, 2000);
		} else if (isDeleting && charIndex === 0) {
			isDeleting = false;
			roleIndex = roleIndex + 1;

			// Reshuffle when we've seen all roles
			if (roleIndex >= remainingRoles.length) {
				remainingRoles = shuffleArray(roles);
				roleIndex = 0;
			}

			typingInterval = setTimeout(typeWriter, 500);
		}
	}

	function typeExpanded() {
		const allRoles = [];

		// Build the list starting from current role
		for (let i = 0; i < remainingRoles.length; i++) {
			const idx = (roleIndex + i) % remainingRoles.length;
			allRoles.push(remainingRoles[idx]);
		}

		// Join with commas, add "et" before last item, and finish with a period
		let fullText;
		if (allRoles.length > 1) {
			const lastRole = allRoles[allRoles.length - 1];
			const otherRoles = allRoles.slice(0, -1);
			fullText = otherRoles.join(', ') + ' et ' + lastRole + '.';
		} else {
			fullText = allRoles[0] + '.';
		}

		if (expandIndex < fullText.length) {
			expandedText = currentRole + fullText.substring(currentRole.length, expandIndex);
			expandIndex++;
			typingInterval = setTimeout(typeExpanded, 9); // 50% slower than 6ms
		} else {
			// Typing complete, set final text and mark as expanded (triggers icon rotation)
			expandedText = currentRole + fullText.substring(currentRole.length);
			isExpanding = false;
			isExpanded = true;
		}
	}

	function typeCollapse() {
		if (expandedText.length > 0) {
			expandedText = expandedText.substring(0, expandedText.length - 1);
			typingInterval = setTimeout(typeCollapse, 6); // 50% slower than 4ms
		} else {
			// Done collapsing, start normal typewriter
			isExpanded = false;
			charIndex = 0;
			isDeleting = false;
			currentRole = '';
			typeWriter();
		}
	}

	function toggleExpand() {
		if (typingInterval) {
			clearTimeout(typingInterval);
		}

		if (!isExpanded) {
			// Start expanding - typing animation will set isExpanded=true when done
			isExpanding = true;
			expandIndex = currentRole.length;
			expandedText = currentRole;
			typeExpanded();
		} else {
			// Start collapsing with animation
			typeCollapse();
		}
	}
</script>

<SEO {...data.seo} />

<main
	class="flex flex-col place-items-start justify-center overflow-hidden w-full min-h-[75vh]"
>
	<div class="typewriter-container text-left px-2 w-full">
		{#if isExpanded || isExpanding}
			<h2 class="text-xl md:text-4xl leading-relaxed">
				vincent charlebois est <span class="role-text">{expandedText}</span>
			</h2>
		{:else}
			<h2 class="text-xl md:text-4xl leading-relaxed">
				vincent charlebois est <span class="role-text">{currentRole}</span><span class="cursor">|</span>
			</h2>
		{/if}
	</div>

	<button class="expand-toggle px-2" on:click={toggleExpand} aria-label={isExpanded ? 'Réduire' : 'Développer'}>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-icon" class:rotated={isExpanded}>
			<path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</button>
</main>

<style>
	h1 {
		font-size: 1.75rem;
	}
	@media (min-width: 568px) {
		h1 {
			font-size: 2.5rem;
		}
	}
	main {
		height: 80vh;
	}

	.typewriter-container {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
	}

	h2 {
		word-wrap: break-word;
		overflow-wrap: break-word;
		hyphens: none;
	}

	.role-text {
		font-weight: normal;
	}

	.cursor {
		animation: blink 1s infinite;
		font-weight: 300;
	}

	@keyframes blink {
		0%, 50% {
			opacity: 1;
		}
		51%, 100% {
			opacity: 0;
		}
	}

	.expand-toggle {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		transition: transform 0.3s ease;
		color: var(--text-color);
	}

	.expand-toggle:hover {
		transform: scale(1.2);
	}

	.expand-icon {
		transition: transform 0.3s ease;
	}

	.expand-icon.rotated {
		transform: rotate(180deg);
	}
</style>
