<script>
	import SEO from '$components/SEO.svelte';
	import { onMount } from 'svelte';

	const seo = {
		title: 'Vincent Charlebois',
		description: 'Vincent Charlebois; intermedia artist, software developer and member of Hypha Worker Co-operative.'
	};

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
		'an intermedia artist',
		'a software developer',
		'a tree planter',
		'an internet explorateur',
		'a full-stack developer',
		'a performance artist',
		'a member of hypha worker co-op',
		'a cooperative technologist',
		'an artist-researcher'
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

		// Shadow content
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #9900fc; font-weight: bold;');
		console.log('%cPart 1: General Picture', 'color: #00ff00; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;');
		console.log('%cAn Overview of an Intermedia Artist', 'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;');
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #9900fc; font-weight: bold;');
		console.log('%c\nThis report provides a comprehensive analysis of the artist Vincent Charlebois, drawing upon available biographical information, project descriptions, and his extensive digital presence. The examination reveals a practitioner whose work is situated at the critical intersection of ecological systems, computational technology, and cooperative social structures. Through a multifaceted practice that spans performance, media art, and creative technology, Charlebois has developed a coherent and compelling artistic language to investigate some of the most pressing issues of the contemporary era.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c1.1 Defining the Practice: The Artist as Assemblage', 'color: #9900fc; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nVincent Charlebois\'s professional identity resists categorization under a single title. Across various platforms and biographical statements, he is described as an "intermedia artist," "creative technologist," "interdisciplinary artist," "artist-researcher," and "writer". This collection of descriptors is not merely a list of competencies but rather a reflection of a deliberate artistic methodology. His creative work is explicitly defined as an "assemblage of disciplines such as performance, text, and media art". This approach suggests that his professional identity is a direct mirror of his artistic process; just as his artworks synthesize physical performance, environmental data, and generative code, his identity assembles the distinct yet interrelated roles of artist, technologist, researcher, and author.\n\nBorn in Montreal, Quebec, Canada, Charlebois\'s practice is fundamentally interdisciplinary. This resistance to the traditional silos of the art world and the technology sector positions him as a crucial translator and connector between these domains. His entire creative output can be understood through the concise yet powerful thesis statement found on his personal website: "Ecologies, technologies;". This phrase serves as the central axis around which his diverse projects and intellectual inquiries revolve, signaling a career dedicated to exploring the profound and often fraught relationship between the natural world and the digital systems that increasingly mediate it.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c1.2 Thematic Constellations: Core Conceptual Pillars', 'color: #9900fc; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nA consistent set of conceptual pillars emerges from the descriptions of Charlebois\'s work, forming a robust philosophical framework that underpins his entire practice. These recurring themes demonstrate a sustained and focused research-creation agenda.\n\nFirst and foremost is an investigation of technological interfaces with nature. His work consistently explores how digital tools, from environmental sensors to artificial intelligence, can be designed and deployed not to dominate or extract from the natural world, but to create new pathways for understanding and interaction. This is not a technologically determinist view, but rather a critical inquiry into the potential for technology to augment human perception of ecological processes.\n\nThis leads directly to his exploration of human-machine relationships, specifically within what he terms a "context of dematerialization of exchanges". His practice grapples with how our interactions—with each other, with institutions, and with the environment—are increasingly mediated by abstract, digital systems. He examines the constraints and possibilities that arise when tangible experiences are translated into intangible data streams.\n\nA key concept, and a significant terminological choice, in his work is ecosystem perceptualization. The use of "perceptualization" over more common terms like "visualization" or "sonification" is intentional and meaningful. While the latter terms imply a translation of data into a single sensory modality (sight or sound), "perceptualization" suggests a more ambitious, holistic goal: to make complex, abstract environmental data tangible and perceivable to the full human sensorium. His pedagogical work, for instance, explicitly aims to make climate data "visible, audible and tangible" through the creation of images, sounds, and even physical 3D objects. This term is central to his artistic mission of bridging the cognitive and sensory gap between direct human experience and the vast, often imperceptible scale of environmental systems.\n\nFinally, Charlebois treats the archive as a poetic and political material. In his practice, an archive—whether it is a collection of weather data or a personal photographic record—is not a static repository of the past. Instead, it is a generative engine for future creation. Data is collected not as an end in itself, but as the "notation for future intermedia experiences," a raw material to be reinterpreted, re-performed, and reimagined. This approach imbues the act of archiving with both creative potential and political weight, questioning who creates archives, what they contain, and how they can be activated to tell new stories.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c1.3 The Cooperative Context: Art, Labor, and Hypha', 'color: #9900fc; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nSince November 2023, Vincent Charlebois has been a member-worker at Hypha Worker Co-operative, a role that represents a significant formalization of the ethical and philosophical threads running through his career. Hypha is a worker-owned cooperative and technical consultancy based in Toronto, specializing in cryptography, decentralized governance, and web protocols. The co-op\'s mission is to "co-creat[e] rich futures with holistic tech" by helping communities leverage technologies like blockchain, peer-to-peer networks, and open-source software in accessible and sustainable ways.\n\nWithin this structure, Charlebois holds the title of "artist-researcher and creative technologist". This position is not ancillary to his artistic practice but appears to be an integral part of its current manifestation. His work at Hypha, particularly within its "Co-Creation Lab" which partners with arts, culture, and activist organizations, allows for a direct synthesis of his artistic research with applied technology. The cooperative model, which is non-hierarchical and employee-led, aligns perfectly with the themes of decentralization and community empowerment evident in his personal projects and civic actions. This affiliation provides a professional framework that values collaboration, shared knowledge, and ethical technological development, making it a logical and coherent extension of his artistic and personal ethos.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #9900fc; font-weight: bold;');
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

		// Join with commas, add "and" before last item, and finish with a period
		let fullText;
		if (allRoles.length > 1) {
			const lastRole = allRoles[allRoles.length - 1];
			const otherRoles = allRoles.slice(0, -1);
			fullText = otherRoles.join(', ') + ', and ' + lastRole + '.';
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

<SEO {...seo} />

<main class="flex flex-col place-items-start justify-center overflow-hidden w-full min-h-[75vh]">
	<div class="typewriter-container text-left px-2 w-full">
		{#if isExpanded || isExpanding}
			<h2 class="text-xl md:text-4xl leading-relaxed">
				vincent charlebois is <span class="role-text">{expandedText}</span>
			</h2>
		{:else}
			<h2 class="text-xl md:text-4xl leading-relaxed">
				vincent charlebois is <span class="role-text">{currentRole}</span><span class="cursor"
					>|</span
				>
			</h2>
		{/if}
	</div>

	<button
		class="expand-toggle px-2"
		on:click={toggleExpand}
		aria-label={isExpanded ? 'Collapse' : 'Expand'}
	>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="expand-icon"
			class:rotated={isExpanded}
		>
			<path
				d="M7 10L12 15L17 10"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</main>

<style>
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
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
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
