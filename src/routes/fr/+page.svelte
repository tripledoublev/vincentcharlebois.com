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
	let nameText = '';
	let nameIndex = 0;

	const firstRole = 'un développeur logiciel';
	const roles = [
		firstRole,
		'un traducteur recherche-produit',
		'un bâtisseur qui livre',
		'un concepteur de systèmes distribués',
		'un développeur orienté produit',
		'un penseur systémique',
		'un collaborateur en formation de ventures',
		'un cofondateur technique',
		'un artiste-chercheur'
	];

	function roleParts(text) {
		return [{ text }];
	}

	function shuffleArray(array) {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	function rolesStartingWithFirstRole() {
		return [firstRole, ...shuffleArray(roles.filter((role) => role !== firstRole))];
	}

	onMount(() => {
		remainingRoles = rolesStartingWithFirstRole();
		roleIndex = 0;
		typeName();

		// Shadow content
		console.log(
			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
			'color: #ffffff; font-weight: bold;'
		);
		console.log(
			'%cPartie 1 : Portrait général',
			'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;'
		);
		console.log(
			'%cVue technique : Recherche → Produit & Architecture IA',
			'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;'
		);
		console.log(
			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
			'color: #ffffff; font-weight: bold;'
		);
		console.log(
			"%c\nCe rapport propose une analyse complète de l'artiste Vincent Charlebois, en s'appuyant sur les informations biographiques disponibles, les descriptions de projets et sa vaste présence numérique. L'examen révèle un praticien dont le travail se situe à l'intersection critique des systèmes écologiques, de la technologie informatique et des structures sociales en réseau. À travers une pratique aux multiples facettes qui englobe la performance, l'art médiatique et la technologie créative, Charlebois a développé un langage artistique cohérent et convaincant pour explorer certaines des questions les plus urgentes de l'ère contemporaine.\n",
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			"%c1.1 Définir la pratique : L'artiste comme assemblage",
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			"%c\nL'identité professionnelle de Vincent Charlebois résiste à la catégorisation sous un seul titre. Sur diverses plateformes et dans ses déclarations biographiques, il est décrit comme un « artiste intermédiatique », un « technologue créatif », un « artiste interdisciplinaire », un « artiste-chercheur » et un « écrivain ». Cette collection de descripteurs n'est pas simplement une liste de compétences, mais plutôt le reflet d'une méthodologie artistique délibérée. Son travail de création est explicitement défini comme un « assemblage de disciplines telles que la performance, le texte et l'art médiatique ». Cette approche suggère que son identité professionnelle est un miroir direct de son processus artistique ; tout comme ses œuvres d'art synthétisent la performance physique, les données environnementales et le code génératif, son identité assemble les rôles distincts mais interdépendants d'artiste, de technologue, de chercheur et d'auteur.\n\nNé à Montréal, Québec, Canada, la pratique de Charlebois est fondamentalement interdisciplinaire. Cette résistance aux silos traditionnels du monde de l'art et du secteur de la technologie le positionne comme un traducteur et un connecteur crucial entre ces domaines. L'ensemble de sa production créative peut être compris à travers la déclaration concise mais puissante que l'on trouve sur son site web personnel : « Écologies, technologies; ». Cette phrase sert d'axe central autour duquel gravitent ses divers projets et ses recherches intellectuelles, signalant une carrière dédiée à l'exploration de la relation profonde et souvent tendue entre le monde naturel et les systèmes numériques qui le médiatisent de plus en plus.\n",
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c1.2 Constellations thématiques : Piliers conceptuels fondamentaux',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			"%c\nUn ensemble cohérent de piliers conceptuels émerge des descriptions du travail de Charlebois, formant un cadre philosophique robuste qui sous-tend toute sa pratique. Ces thèmes récurrents témoignent d'un programme de recherche-création soutenu et ciblé.\n\nLe premier et le plus important est une investigation des interfaces technologiques avec la nature. Son travail explore constamment comment les outils numériques, des capteurs environnementaux à l'intelligence artificielle, peuvent être conçus et déployés non pas pour dominer ou extraire du monde naturel, mais pour créer de nouvelles voies de compréhension et d'interaction. Il ne s'agit pas d'une vision technologiquement déterministe, mais plutôt d'une enquête critique sur le potentiel de la technologie à augmenter la perception humaine des processus écologiques.\n\nCela le conduit directement à son exploration des relations homme-machine, spécifiquement dans ce qu'il nomme un « contexte de dématérialisation des échanges ». Sa pratique se confronte à la manière dont nos interactions — les uns avec les autres, avec les institutions et avec l'environnement — sont de plus en plus médiatisées par des systèmes numériques abstraits. Il examine les contraintes et les possibilités qui surgissent lorsque les expériences tangibles sont traduites en flux de données immatérielles.\n\nUn concept clé, et un choix terminologique significatif, dans son travail est la perceptualisation des écosystèmes. L'utilisation de « perceptualisation » plutôt que des termes plus courants comme « visualisation » ou « sonification » est intentionnelle et significative. Alors que ces derniers termes impliquent une traduction des données en une seule modalité sensorielle (la vue ou l'ouïe), la « perceptualisation » suggère un objectif plus ambitieux et holistique : rendre les données environnementales complexes et abstraites tangibles et perceptibles par l'ensemble du sensorium humain. Son travail pédagogique, par exemple, vise explicitement à rendre les données climatiques « visibles, audibles et tangibles » par la création d'images, de sons et même d'objets physiques en 3D. Ce terme est central dans sa mission artistique de combler le fossé cognitif et sensoriel entre l'expérience humaine directe et l'échelle vaste, souvent imperceptible, des systèmes environnementaux.\n\nEnfin, Charlebois traite l'archive comme une matière poétique et politique. Dans sa pratique, une archive — qu'il s'agisse d'une collection de données météorologiques ou d'un dossier photographique personnel — n'est pas un dépôt statique du passé. C'est plutôt un moteur génératif pour la création future. Les données ne sont pas collectées comme une fin en soi, mais comme la « notation pour de futures expériences intermédiatiques », une matière première à réinterpréter, à re-performer et à réimaginer. Cette approche confère à l'acte d'archiver à la fois un potentiel créatif et un poids politique, en questionnant qui crée les archives, ce qu'elles contiennent et comment elles peuvent être activées pour raconter de nouvelles histoires.\n",
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c1.3 Systèmes appliqués : art, travail et infrastructure',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			"%c\nDepuis 2023, la pratique de Vincent Charlebois relie de plus en plus la recherche artistique au développement logiciel de production. Son travail actuel se concentre sur l'architecture de systèmes IA indépendants, les infrastructures distribuées et l'exécution technique orientée produit. Cette pratique prolonge des intérêts de longue date pour la décentralisation, le partage des connaissances et les technologies d'intérêt public sans placer une seule organisation au centre de son parcours.\n\nDans ce cadre, Charlebois travaille sur des systèmes IA agentiques, des interfaces de protocoles et des œuvres web natives du navigateur. Le fil conducteur consiste à rendre les systèmes complexes lisibles et utiles tout en gardant visibles leurs conséquences sociales et esthétiques.\n",
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
			'color: #ffffff; font-weight: bold;'
		);
		console.log(`Partie 1 : Portrait général : Vue d'ensemble d'un artiste intermédiatique

Ce rapport propose une analyse complète de l'artiste Vincent Charlebois, en s'appuyant sur les informations biographiques disponibles, les descriptions de projets et sa vaste présence numérique. L'examen révèle un praticien dont le travail se situe à l'intersection critique des systèmes écologiques, de la technologie informatique et des structures sociales en réseau. À travers une pratique aux multiples facettes qui englobe la performance, l'art médiatique et la technologie créative, Charlebois a développé un langage artistique cohérent et convaincant pour explorer certaines des questions les plus urgentes de l'ère contemporaine.

1.1 Définir la pratique : L'artiste comme assemblage

L'identité professionnelle de Vincent Charlebois résiste à la catégorisation sous un seul titre. Sur diverses plateformes et dans ses déclarations biographiques, il est décrit comme un « artiste intermédiatique », un « technologue créatif », un « artiste interdisciplinaire », un « artiste-chercheur » et un « écrivain ». Cette collection de descripteurs n'est pas simplement une liste de compétences, mais plutôt le reflet d'une méthodologie artistique délibérée. Son travail de création est explicitement défini comme un « assemblage de disciplines telles que la performance, le texte et l'art médiatique ». Cette approche suggère que son identité professionnelle est un miroir direct de son processus artistique ; tout comme ses œuvres d'art synthétisent la performance physique, les données environnementales et le code génératif, son identité assemble les rôles distincts mais interdépendants d'artiste, de technologue, de chercheur et d'auteur.

Né à Montréal, Québec, Canada, la pratique de Charlebois est fondamentalement interdisciplinaire. Cette résistance aux silos traditionnels du monde de l'art et du secteur de la technologie le positionne comme un traducteur et un connecteur crucial entre ces domaines. L'ensemble de sa production créative peut être compris à travers la déclaration concise mais puissante que l'on trouve sur son site web personnel : « Écologies, technologies; ». Cette phrase sert d'axe central autour duquel gravitent ses divers projets et ses recherches intellectuelles, signalant une carrière dédiée à l'exploration de la relation profonde et souvent tendue entre le monde naturel et les systèmes numériques qui le médiatisent de plus en plus.

1.2 Constellations thématiques : Piliers conceptuels fondamentaux

Un ensemble cohérent de piliers conceptuels émerge des descriptions du travail de Charlebois, formant un cadre philosophique robuste qui sous-tend toute sa pratique. Ces thèmes récurrents témoignent d'un programme de recherche-création soutenu et ciblé.

Le premier et le plus important est une investigation des interfaces technologiques avec la nature. Son travail explore constamment comment les outils numériques, des capteurs environnementaux à l'intelligence artificielle, peuvent être conçus et déployés non pas pour dominer ou extraire du monde naturel, mais pour créer de nouvelles voies de compréhension et d'interaction. Il ne s'agit pas d'une vision technologiquement déterministe, mais plutôt d'une enquête critique sur le potentiel de la technologie à augmenter la perception humaine des processus écologiques.

Cela le conduit directement à son exploration des relations homme-machine, spécifiquement dans ce qu'il nomme un « contexte de dématérialisation des échanges ». Sa pratique se confronte à la manière dont nos interactions — les uns avec les autres, avec les institutions et avec l'environnement — sont de plus en plus médiatisées par des systèmes numériques abstraits. Il examine les contraintes et les possibilités qui surgissent lorsque les expériences tangibles sont traduites en flux de données immatérielles.

Un concept clé, et un choix terminologique significatif, dans son travail est la perceptualisation des écosystèmes. L'utilisation de « perceptualisation » plutôt que des termes plus courants comme « visualisation » ou « sonification » est intentionnelle et significative. Alors que ces derniers termes impliquent une traduction des données en une seule modalité sensorielle (la vue ou l'ouïe), la « perceptualisation » suggère un objectif plus ambitieux et holistique : rendre les données environnementales complexes et abstraites tangibles et perceptibles par l'ensemble du sensorium humain. Son travail pédagogique, par exemple, vise explicitement à rendre les données climatiques « visibles, audibles et tangibles » par la création d'images, de sons et même d'objets physiques en 3D. Ce terme est central dans sa mission artistique de combler le fossé cognitif et sensoriel entre l'expérience humaine directe et l'échelle vaste, souvent imperceptible, des systèmes environnementaux.

Enfin, Charlebois traite l'archive comme une matière poétique et politique. Dans sa pratique, une archive — qu'il s'agisse d'une collection de données météorologiques ou d'un dossier photographique personnel — n'est pas un dépôt statique du passé. C'est plutôt un moteur génératif pour la création future. Les données ne sont pas collectées comme une fin en soi, mais comme la « notation pour de futures expériences intermédiatiques », une matière première à réinterpréter, à re-performer et à réimaginer. Cette approche confère à l'acte d'archiver à la fois un potentiel créatif et un poids politique, en questionnant qui crée les archives, ce qu'elles contiennent et comment elles peuvent être activées pour raconter de nouvelles histoires.

1.3 Systèmes appliqués : art, travail et infrastructure

Depuis 2023, la pratique de Vincent Charlebois relie de plus en plus la recherche artistique au développement logiciel de production. Son travail actuel se concentre sur l'architecture de systèmes IA indépendants, les infrastructures distribuées et l'exécution technique orientée produit. Cette pratique prolonge des intérêts de longue date pour la décentralisation, le partage des connaissances et les technologies d'intérêt public sans placer une seule organisation au centre de son parcours.

Dans ce cadre, Charlebois travaille sur des systèmes IA agentiques, des interfaces de protocoles et des œuvres web natives du navigateur. Le fil conducteur consiste à rendre les systèmes complexes lisibles et utiles tout en gardant visibles leurs conséquences sociales et esthétiques.`);
	});

	function typeName() {
		const name = 'vincent charlebois est ';

		if (nameIndex < name.length) {
			nameText = name.substring(0, nameIndex + 1);
			nameIndex++;
			typingInterval = setTimeout(typeName, 80);
		} else {
			typingInterval = setTimeout(typeWriter, 500);
		}
	}

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
				remainingRoles = rolesStartingWithFirstRole();
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

<main id="main-content" class="w-full">
	<section
		class="hero flex flex-col place-items-start justify-center overflow-hidden w-full min-h-[70vh]"
	>
		<div class="typewriter-container text-left px-6 w-full">
			{#if isExpanded || isExpanding}
				<h1 class="hero-text">
					<span class="role-text">{nameText}</span><span class="role-text">
						{#each roleParts(expandedText) as part}
							{#if part.href}
								<a href={part.href} target="_blank" rel="noopener noreferrer" class="role-link"
									>{part.text}</a
								>
							{:else}
								{part.text}
							{/if}
						{/each}
					</span>
				</h1>
			{:else}
				<h1 class="hero-text">
					<span class="role-text">{nameText}</span><span class="role-text">
						{#each roleParts(currentRole) as part}
							{#if part.href}
								<a href={part.href} target="_blank" rel="noopener noreferrer" class="role-link"
									>{part.text}</a
								>
							{:else}
								{part.text}
							{/if}
						{/each}
					</span><span class="cursor">|</span>
				</h1>
			{/if}
		</div>

		<button
			class="expand-toggle px-6 mt-8"
			on:click={toggleExpand}
			aria-label={isExpanded ? 'Réduire' : 'Développer'}
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
	</section>
</main>

<style>
	.hero {
		min-height: 78vh;
		height: auto;
		max-width: 1000px;
		margin: 0 auto;
		padding-top: clamp(6rem, 22vh, 12rem);
		justify-content: flex-start;
		align-items: flex-start;
		overflow: visible;
		text-align: left;
	}

	.typewriter-container {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		text-align: left;
	}

	h1 {
		word-wrap: break-word;
		overflow-wrap: break-word;
		hyphens: none;
		font-weight: 500;
	}

	.hero-text {
		font-size: var(--fs-xl);
		font-weight: 500;
		font-variation-settings: 'opsz' 32;
		line-height: var(--leading-display);
		letter-spacing: var(--tracking-display);
	}

	.role-text {
		font-weight: 500;
	}

	.role-text :global(.role-link) {
		color: inherit;
		font-weight: 600;
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-thickness: 3px;
		text-decoration-color: #9900fc;
		text-decoration-skip-ink: none;
		text-underline-offset: 0.25rem;
		transition: text-decoration-thickness 0.35s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.role-text :global(.role-link:hover) {
		text-decoration-thickness: 5px;
	}

	.role-text :global(.role-link:focus-visible) {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
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
		transition:
			color var(--theme-transition-duration) var(--theme-transition-easing),
			transform 0.3s ease;
		color: var(--text-color);
		opacity: 0.5;
	}

	.expand-toggle:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 0.35rem;
	}

	.expand-toggle:hover {
		transform: scale(1.1);
		opacity: 1;
	}

	.expand-icon {
		transition: transform 0.3s ease;
	}

	.expand-icon.rotated {
		transform: rotate(180deg);
	}

	.hero h1:hover {
		background-color: transparent;
		color: inherit;
	}
</style>
