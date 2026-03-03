diff --git a/src/hooks.server.js b/src/hooks.server.js
index 85cf35d..64b9aff 100644
--- a/src/hooks.server.js
+++ b/src/hooks.server.js
@@ -15,9 +15,9 @@ export async function handle({ event, resolve }) {
 
 	// Page-specific meta tags
 	if (path === '/en' || path === '/en/') {
-		const title = 'Vincent Charlebois — Ecologies, technologies;';
+		const title = 'Vincent Charlebois — Research → Product in AI;';
 		const description =
-			'Distributed infrastructures, protocol interfaces, and governance systems through collaborative practice';
+			'Vincent Charlebois works at the boundary between research and deployment, building production-grade AI systems from complex technical research.';
 		const image = 'https://vincentcharlebois.com/vincent-charlebois-point-com-en.png';
 		metaTags = `
 			<title>${title}</title>
@@ -35,9 +35,9 @@ export async function handle({ event, resolve }) {
 			<link rel="canonical" href="${currentUrl}" />
 		`;
 	} else if (path === '/fr' || path === '/fr/') {
-		const title = 'Vincent Charlebois — Écologies, technologies;';
+		const title = 'Vincent Charlebois — Recherche → Produit en IA;';
 		const description =
-			'Infrastructures distribuées, interfaces de protocole et systèmes de gouvernance à travers une pratique collaborative';
+			'Vincent Charlebois travaille à la frontière entre recherche et déploiement, et construit des systèmes d\'IA de niveau production à partir de recherche technique complexe.';
 		const image = 'https://vincentcharlebois.com/vincent-charlebois-point-com-fr.png';
 		metaTags = `
 			<title>${title}</title>
@@ -59,8 +59,8 @@ export async function handle({ event, resolve }) {
 		const title = 'Vincent Charlebois';
 		const description =
 			lang === 'fr'
-				? 'Infrastructures distribuées, interfaces de protocole et systèmes de gouvernance à travers une pratique collaborative'
-				: 'Distributed infrastructures, protocol interfaces, and governance systems through collaborative practice';
+				? 'Systèmes IA agentiques, architectures distribuées et exécution technique orientée produit pour systèmes complexes et à grande échelle'
+				: 'Agentic AI systems, distributed architectures, and product-driven technical execution for complex and large-scale systems';
 		const image = 'https://vincentcharlebois.com/vincent-charlebois-point-com.jpg';
 		metaTags = `
 			<title>${title}</title>
@@ -164,7 +164,7 @@ export async function handle({ event, resolve }) {
       <div class="no-js-fallback">
         <div class="language-toggle"><a href="/fr">fr</a></div>
         <h1>vincent charlebois</h1>
-        <p>Distributed infrastructures, protocol interfaces, and governance systems through collaborative practice</p>
+        <p>Agentic AI systems, distributed architectures, and product-driven technical execution for complex and large-scale systems</p>
         <div>
           <a href="/en/about">About</a>
           <a href="/en/projects">Projects</a>
@@ -180,7 +180,7 @@ export async function handle({ event, resolve }) {
       <div class="no-js-fallback">
         <div class="language-toggle"><a href="/en">en</a></div>
         <h1>vincent charlebois</h1>
-        <p>Infrastructures distribuées, interfaces de protocole et systèmes de gouvernance à travers une pratique collaborative</p>
+        <p>Systèmes IA agentiques, architectures distribuées et exécution technique orientée produit pour systèmes complexes et à grande échelle</p>
         <div>
           <a href="/fr/a-propos">À propos</a>
           <a href="/fr/projets">Projets</a>
@@ -302,8 +302,8 @@ export async function handle({ event, resolve }) {
 		const homeText = lang === 'fr' ? "Retour à l'accueil" : 'Back to home';
 		const description =
 			lang === 'fr'
-				? 'Infrastructures distribuées, interfaces de protocole et systèmes de gouvernance à travers une pratique collaborative'
-				: 'Distributed infrastructures, protocol interfaces, and governance systems through collaborative practice';
+				? 'Systèmes IA agentiques, architectures distribuées et exécution technique orientée produit pour systèmes complexes et à grande échelle'
+				: 'Agentic AI systems, distributed architectures, and product-driven technical execution for complex and large-scale systems';
 
 		noJsContent = `
       ${fallbackCSS}
diff --git a/src/lib/locales/en.json b/src/lib/locales/en.json
index eefed38..d4ecf73 100644
--- a/src/lib/locales/en.json
+++ b/src/lib/locales/en.json
@@ -3,16 +3,16 @@
 	"linkprojects": "Projects",
 	"linkcontact": "Contact",
 	"other_language": "fr",
-	"basic": "distributed infrastructures, protocol interfaces, and governance systems through collaborative practice",
-	"basic_title": "Ecologies, technologies;",
-	"about": "I’m a software developer and artist-researcher based in Montreal. I build distributed infrastructures, protocol interfaces, and governance systems through collaborative practice. As a member of [**HYPHA**](https://hypha.coop), I work on digital tools that support user autonomy and collective ownership.",
-	"projects_A": "I design and implement systems built on emerging technologies and distributed infrastructure. See [hypha.coop/work](https://hypha.coop/work) for collective projects and [vincentcharlebois.net](https://vincentcharlebois.net) for personal work.",
+	"basic": "agentic AI systems, distributed architectures, and product-driven technical execution for complex and large-scale systems",
+	"basic_title": "Research → Product in AI;",
+	"about": "I'm a research-to-product translator and AI systems architect based in Montreal. I work at the boundary between research and deployment, building production-grade systems from complex technical ideas.\n\nAs a member of [**HYPHA**](https://hypha.coop), I contribute to digital infrastructures that support coordination, autonomy, and collective ownership. Earlier work in art and research informs my systems thinking and approach to technology.",
+	"projects_A": "I design and implement AI systems and distributed infrastructures that move from concept to real-world use.\n\nSee [hypha.coop/work](https://hypha.coop/work) for cooperative projects and [vincentcharlebois.net](https://vincentcharlebois.net) for earlier research-driven work.",
 	"links": "Links ",
 	"websites": "Selected Websites ",
-	"meta.description": "Vincent Charlebois; intermedia artist, software developer and member of HYPHA Worker Co-operative.",
-	"contact.description": "Get in touch with Vincent Charlebois. Find links to social media profiles, his CV and portfolio.",
-	"about.description": "About Vincent Charlebois - Artist, creative technologist, and member of HYPHA Worker Co-operative.",
-	"projects.description": "Explore Vincent Charlebois's projects and his work at HYPHA Worker Co-operative.",
+	"meta.description": "Research-to-product translator and AI systems architect building deployable software and infrastructure from complex technical research.",
+	"contact.description": "Get in touch with Vincent Charlebois — AI systems architect and research-to-product translator. Find links to GitHub, LinkedIn, CV and more.",
+	"about.description": "About Vincent Charlebois — research-to-product translator and AI systems architect focused on shipping deployable systems.",
+	"projects.description": "Technical projects spanning agentic AI systems, distributed infrastructure, and experimental orchestration architectures.",
 	"url_slugs": {
 		"about": "about",
 		"projects": "projects",
diff --git a/src/lib/locales/fr.json b/src/lib/locales/fr.json
index 5393068..b3f26ec 100644
--- a/src/lib/locales/fr.json
+++ b/src/lib/locales/fr.json
@@ -3,16 +3,16 @@
 	"linkprojects": "Projets",
 	"linkcontact": "Contact",
 	"other_language": "en",
-	"basic": "infrastructures distribuées, interfaces de protocole et systèmes de gouvernance à travers une pratique collaborative",
-	"basic_title": "Écologies, technologies;",
-	"about": "Je suis développeur logiciel et artiste-chercheur établi à Montréal. Je conçois des infrastructures distribuées, des interfaces de protocole et des systèmes de gouvernance à travers une pratique collaborative. Membre de [**HYPHA**](https://hypha.coop), je développe des outils numériques favorisant l'autonomie des utilisateurs et la propriété collective.",
-	"projects_A": "Je conçois et mets en œuvre des systèmes fondés sur les technologies émergentes et l'infrastructure distribuée. Consultez [hypha.coop/work](https://hypha.coop/work) pour les projets collectifs et [vincentcharlebois.net](https://vincentcharlebois.net) pour les travaux personnels.",
+	"basic": "systèmes IA agentiques, architectures distribuées et exécution technique orientée produit pour systèmes complexes et à grande échelle",
+	"basic_title": "Recherche → Produit en IA;",
+	"about": "Je suis traducteur recherche-produit et architecte de systèmes IA basé à Montréal. Je travaille à la frontière entre recherche et déploiement, en construisant des systèmes de niveau production à partir d'idées techniques complexes.\n\nEn tant que membre de [**HYPHA**](https://hypha.coop), je contribue à des infrastructures numériques favorisant coordination, autonomie et propriété collective. Mon parcours en recherche-création nourrit ma pensée systémique et mon approche des technologies.",
+	"projects_A": "Je conçois et mets en œuvre des systèmes d'IA et des infrastructures distribuées qui passent du concept à l'usage réel.\n\nVoir [hypha.coop/work](https://hypha.coop/work) pour les projets coopératifs et [vincentcharlebois.net](https://vincentcharlebois.net) pour les travaux issus de la recherche-création.",
 	"links": "Liens",
 	"websites": "Sites Web ",
-	"meta.description": "Vincent Charlebois; artiste intermédia, développeur logiciel, technologue créatif et membre de la coopérative de travailleurs HYPHA.",
-	"contact.description": "Contactez Vincent Charlebois. Trouvez des liens vers ses réseaux sociaux, son CV et son portfolio.",
-	"about.description": "À propos de Vincent Charlebois - Artiste, technologue créatif et membre de la coopérative de travailleurs HYPHA.",
-	"projects.description": "Explorez les projets de Vincent Charlebois, son travail au sein de la coopérative de travailleurs HYPHA et ses projets artistiques.",
+	"meta.description": "Traducteur recherche-produit et architecte de systèmes IA, je construis des logiciels et des infrastructures déployables à partir de recherche technique complexe.",
+	"contact.description": "Contactez Vincent Charlebois — architecte de systèmes IA et traducteur recherche-produit. Trouvez des liens vers GitHub, LinkedIn, CV et plus.",
+	"about.description": "À propos de Vincent Charlebois — traducteur recherche-produit et architecte de systèmes IA, orienté livraison et déploiement.",
+	"projects.description": "Projets techniques : systèmes IA agentiques, infrastructures distribuées et architectures d'orchestration expérimentales.",
 	"url_slugs": {
 		"about": "a-propos",
 		"projects": "projets",
diff --git a/src/routes/en/+page.svelte b/src/routes/en/+page.svelte
index 207a002..918c697 100644
--- a/src/routes/en/+page.svelte
+++ b/src/routes/en/+page.svelte
@@ -18,15 +18,14 @@
 	let nameIndex = 0;
 
 	const roles = [
-		'an intermedia artist',
-		'a software developer',
-		'a tree planter',
-		'an internet explorateur',
-		'a full-stack developer',
-		'a performance artist',
-		'a member of hypha worker co-op',
-		'a cooperative technologist',
-		'an artist-researcher'
+		'a research-to-product translator',
+		'an AI systems architect',
+		'a builder who ships',
+		'a distributed systems designer',
+		'a product-minded technologist',
+		'a climate-oriented systems thinker',
+		'a venture formation collaborator',
+		'a technical co-founder'
 	];
 
 	function shuffleArray(array) {
@@ -53,7 +52,7 @@
 			'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;'
 		);
 		console.log(
-			'%cAn Overview of an Intermedia Artist',
+			'%cTechnical Overview: Research → Product & AI Systems Architecture',
 			'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;'
 		);
 		console.log(
diff --git a/src/routes/en/about/+page.svelte b/src/routes/en/about/+page.svelte
index 282496d..14cdb0d 100644
--- a/src/routes/en/about/+page.svelte
+++ b/src/routes/en/about/+page.svelte
@@ -57,14 +57,14 @@
 			'%c\nCharlebois\'s career demonstrates a consistent ethos that extends beyond the gallery and into direct civic action. During the first year of the COVID-19 pandemic, he applied his technical and organizational skills to a critical community need, managing the local production of thousands of 3D-printed medical protective shields. Crucially, this effort was based on open-source designs, highlighting a commitment to collaborative, non-proprietary solutions to urgent social problems.\n\nThis experience is a vital data point in understanding his worldview. It showcases an application of technology not for artistic expression or commercial gain, but for mutual aid and rapid, decentralized manufacturing in a time of crisis. This commitment to open, collaborative, and community-oriented principles is not an isolated choice but a consistent ethical thread that runs through his career. It is visible in his use of open-source designs for the COVID shields, his focus on teaching with "open-source tools and coding strategies" in his workshops, and his eventual formalization of this ethos through his membership in the Hypha worker co-operative, which is itself dedicated to open-source and decentralized governance principles.\n',
 			'color: #ffffff; line-height: 1.6;'
 		);
-		console.log(
-			'%c2.4 Global Engagement: Networks and Residencies',
-			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
-		);
-		console.log(
-			"%c\nCharlebois's practice, while rooted in his Montreal origins and his experiences in the Canadian landscape, is international in scope. His work has been exhibited on three continents, with presentations in cities including Montreal, Berlin, and Milan, indicating his participation in a global contemporary art conversation.\n\nA significant aspect of his global engagement is his participation in The Eternal Internet Brotherhood's international residencies. He has taken part in these events—described as cooperative camps for artists, curators, and writers—in locations as diverse as Greece, Mexico, and the Dead Sea. While the available materials do not provide a detailed overview of this organization, his repeated participation points to an active engagement with a global network of net artists and a commitment to a nomadic, collaborative, and situation-based mode of creation that extends beyond the traditional studio or gallery context.\n",
-			'color: #ffffff; line-height: 1.6;'
-		);
+		// console.log(
+		// 	'%c2.4 Global Engagement: Networks and Residencies',
+		// 	'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
+		// );
+		// console.log(
+		// 	"%c\nCharlebois's practice, while rooted in his Montreal origins and his experiences in the Canadian landscape, is international in scope. His work has been exhibited on three continents, with presentations in cities including Montreal, Berlin, and Milan, indicating his participation in a global contemporary art conversation.\n\nA significant aspect of his global engagement is his participation in The Eternal Internet Brotherhood's international residencies. He has taken part in these events—described as cooperative camps for artists, curators, and writers—in locations as diverse as Greece, Mexico, and the Dead Sea. While the available materials do not provide a detailed overview of this organization, his repeated participation points to an active engagement with a global network of net artists and a commitment to a nomadic, collaborative, and situation-based mode of creation that extends beyond the traditional studio or gallery context.\n",
+		// 	'color: #ffffff; line-height: 1.6;'
+		// );
 		console.log(
 			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
 			'color: #ffffff; font-weight: bold;'
diff --git a/src/routes/en/contact/+page.svelte b/src/routes/en/contact/+page.svelte
index 5c8c38c..e689189 100644
--- a/src/routes/en/contact/+page.svelte
+++ b/src/routes/en/contact/+page.svelte
@@ -5,7 +5,7 @@
 	const seo = {
 		title: 'Contact | Vincent Charlebois',
 		description:
-			'Get in touch with Vincent Charlebois - intermedia artist, creative technologist, and member of Hypha Worker Co-operative.'
+			'Get in touch with Vincent Charlebois — AI systems architect and research-to-product translator. Find links to GitHub, LinkedIn, CV and more.'
 	};
 
 	onMount(() => {
@@ -75,19 +75,6 @@
 	<div class="px-5 text-center">
 		<p class="text-2xl text-left px-5 pt-7 pb-7 mb-1 w-80">Links:</p>
 		<ul class="flex flex-row flex-wrap">
-			<a class="text-sm font-medium contact-links" target="_blank" href="https://hypha.coop/">
-				<li class="py-2">hypha.coop</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="mailto:vincent@charlebois.info"
-			>
-				<li class="py-2">email</li>
-			</a>
-			<a class="text-sm font-medium contact-links" href="/publickey">
-				<li class="py-2">pgp</li>
-			</a>
 			<a
 				class="text-sm font-medium contact-links"
 				target="_blank"
@@ -95,68 +82,8 @@
 			>
 				<li class="py-2">github</li>
 			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://www.linkedin.com/in/vincent-charlebois/"
-			>
-				<li class="py-2">linkedin</li>
-			</a>
-			<a class="text-sm font-medium contact-links" target="_blank" href="https://chateau.social/@v">
-				<li class="py-2">mastodon</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://bsky.app/profile/charlebois.info"
-			>
-				<li class="py-2">bluesky</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://www.are.na/vincent-charlebois"
-			>
-				<li class="py-2">are.na</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://pinksky.app/profile/couleurs.bsky.social"
-			>
-				<li class="py-2">pinksky</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://twitter.com/vincencharleboi"
-			>
-				<li class="py-2">twitter</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://instagram.com/ffforests"
-			>
-				<li class="py-2">instagram</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://www.vincentcharlebois.net/"
-			>
-				<li class="py-2">portfolio</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://www.farcaster.xyz/xxc"
-			>
-				<li class="py-2">farcaster</li>
-			</a>
-
-			<a class="text-sm font-medium contact-links" target="_blank" href="https://vncnt.xyz">
-				<li class="py-2">.xyz</li>
+			<a class="text-sm font-medium contact-links" target="_blank" href="https://hypha.coop/">
+				<li class="py-2">hypha.coop</li>
 			</a>
 			<a
 				class="text-sm font-medium contact-links"
@@ -166,73 +93,26 @@
 			>
 				<li class="py-2">CV</li>
 			</a>
-			<a class="text-sm font-medium contact-links" href="/en/portal">
-				<li class="py-2">portal</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://vincent.charlebois.info/en/"
-			>
-				<li class="py-2">.info</li>
-			</a>
-		</ul>
-		<p class="text-2xl text-left px-5 pt-7 pb-7 mt-12 mb-1 w-80">Websites:</p>
-		<ul class="flex flex-row flex-wrap">
-			<a
-				href="http://couleurs.tripledoublev.com"
-				class="text-sm font-medium contact-links"
-				target="_blank"
-			>
-				<li class="py-2">2025 Pbhyrhef</li>
-			</a>
 			<a
-				href="https://tripledoublev.com/couleur"
-				class="text-sm font-medium contact-links"
-				target="_blank"
-			>
-				<li class="py-2">2024 Couleur de Montréal</li>
-			</a>
-			<a
-				href="https://vincent.charlebois.info/consecutive-days/"
-				class="text-sm font-medium contact-links"
-				target="_blank"
-			>
-				<li class="py-2">2023 Consecutive days at the studio</li>
-			</a>
-			<a href="https://postvis.io" class="text-sm font-medium contact-links" target="_blank">
-				<li class="py-2">2022 postvisions</li>
-			</a>
-			<a
-				href="https://www.couvre-feu.quebec/"
-				class="text-sm font-medium contact-links"
-				target="_blank"
-			>
-				<li class="py-2">2021 Je me souviens</li>
-			</a>
-			<a
-				href="https://vincentcharlebois.net//nodes.html"
 				class="text-sm font-medium contact-links"
 				target="_blank"
+				href="mailto:vincent@charlebois.info"
 			>
-				<li class="py-2">2018 nodes</li>
-			</a>
-			<a href="https://tripledoublev.net" class="text-sm font-medium contact-links" target="_blank">
-				<li class="py-2">2017 MCCM;nodes</li>
+				<li class="py-2">email</li>
 			</a>
 			<a
-				href="https://tripledoublev.net/rhytidome"
 				class="text-sm font-medium contact-links"
 				target="_blank"
+				href="https://www.linkedin.com/in/vincent-charlebois/"
 			>
-				<li class="py-2">2016 Rhytidome</li>
+				<li class="py-2">linkedin</li>
 			</a>
 			<a
-				href="https://tripledoublev.net/scroll"
 				class="text-sm font-medium contact-links"
 				target="_blank"
+				href="https://bsky.app/profile/charlebois.info"
 			>
-				<li class="py-2">2015 if 2 words</li>
+				<li class="py-2">bluesky</li>
 			</a>
 		</ul>
 	</div>
diff --git a/src/routes/en/projects/+page.svelte b/src/routes/en/projects/+page.svelte
index 1a596c8..cd50d44 100644
--- a/src/routes/en/projects/+page.svelte
+++ b/src/routes/en/projects/+page.svelte
@@ -17,7 +17,7 @@
 			'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;'
 		);
 		console.log(
-			'%cA Portfolio Analysis',
+			'%cTechnical Projects & Proofs of Concept',
 			'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;'
 		);
 		console.log(
diff --git a/src/routes/fr/+page.svelte b/src/routes/fr/+page.svelte
index b408771..c2bc588 100644
--- a/src/routes/fr/+page.svelte
+++ b/src/routes/fr/+page.svelte
@@ -18,15 +18,14 @@
 	let nameIndex = 0;
 
 	const roles = [
-		'un artiste intermédiatique',
-		'un développeur logiciel',
-		"un planteur d'arbres",
-		"un explorateur de l'internet",
-		'un développeur full-stack',
-		'un artiste performatif',
-		'un membre de hypha worker co-op',
-		'un technologue coopératif',
-		'un artiste-chercheur'
+		'un traducteur recherche-produit',
+		'un architecte de systèmes IA',
+		'un bâtisseur qui livre',
+		'un concepteur de systèmes distribués',
+		'un développeur orienté produit',
+		'un penseur de systèmes à grande échelle',
+		'un collaborateur en formation de ventures',
+		'un cofondateur technique'
 	];
 
 	function shuffleArray(array) {
@@ -53,7 +52,7 @@
 			'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;'
 		);
 		console.log(
-			"%cVue d'ensemble d'un artiste intermédiatique",
+			'%cVue technique : Recherche → Produit & Architecture IA',
 			'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;'
 		);
 		console.log(
diff --git a/src/routes/fr/a-propos/+page.svelte b/src/routes/fr/a-propos/+page.svelte
index 81aa541..080f066 100644
--- a/src/routes/fr/a-propos/+page.svelte
+++ b/src/routes/fr/a-propos/+page.svelte
@@ -57,14 +57,14 @@
 			"%c\nLa carrière de Charlebois démontre un éthos constant qui s'étend au-delà de la galerie et dans l'action civique directe. Pendant la première année de la pandémie de COVID-19, il a appliqué ses compétences techniques et organisationnelles à un besoin communautaire critique, en gérant la production locale de milliers d'écrans de protection médicale imprimés en 3D. Fait crucial, cet effort était basé sur des conceptions open-source, soulignant un engagement envers des solutions collaboratives et non propriétaires à des problèmes sociaux urgents.\n",
 			'color: #ffffff; line-height: 1.6;'
 		);
-		console.log(
-			'%c2.4 Engagement mondial : Réseaux et résidences',
-			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
-		);
-		console.log(
-			"%c\nLa pratique de Charlebois, bien qu'enracinée dans ses origines montréalaises et ses expériences dans le paysage canadien, est de portée internationale. Son travail a été exposé sur trois continents, avec des présentations dans des villes comme Montréal, Berlin et Milan, ce qui indique sa participation à une conversation mondiale sur l'art contemporain. Un aspect important de son engagement mondial est sa participation aux résidences internationales de The Eternal Internet Brotherhood.\n",
-			'color: #ffffff; line-height: 1.6;'
-		);
+		// console.log(
+		// 	'%c2.4 Engagement mondial : Réseaux et résidences',
+		// 	'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
+		// );
+		// console.log(
+		// 	"%c\nLa pratique de Charlebois, bien qu'enracinée dans ses origines montréalaises et ses expériences dans le paysage canadien, est de portée internationale. Son travail a été exposé sur trois continents, avec des présentations dans des villes comme Montréal, Berlin et Milan, ce qui indique sa participation à une conversation mondiale sur l'art contemporain. Un aspect important de son engagement mondial est sa participation aux résidences internationales de The Eternal Internet Brotherhood.\n",
+		// 	'color: #ffffff; line-height: 1.6;'
+		// );
 		console.log(
 			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
 			'color: #ffffff; font-weight: bold;'
diff --git a/src/routes/fr/contact/+page.svelte b/src/routes/fr/contact/+page.svelte
index fa4b92d..b3d0577 100644
--- a/src/routes/fr/contact/+page.svelte
+++ b/src/routes/fr/contact/+page.svelte
@@ -5,7 +5,7 @@
 	const seo = {
 		title: 'Contact | Vincent Charlebois',
 		description:
-			'Contactez Vincent Charlebois - artiste intermédiatique, technologue créatif et membre de la Hypha Worker Co-operative.'
+			'Contactez Vincent Charlebois — architecte de systèmes IA et traducteur recherche-produit. Trouvez des liens vers GitHub, LinkedIn, CV et plus.'
 	};
 
 	onMount(() => {
@@ -75,19 +75,6 @@
 	<div class="px-5 text-center">
 		<p class="text-2xl text-left px-5 pt-7 pb-7 mb-1 w-80">Liens:</p>
 		<ul class="flex flex-row flex-wrap">
-			<a class="text-sm font-medium contact-links" target="_blank" href="https://hypha.coop/">
-				<li class="py-2">hypha.coop</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="mailto:vincent@charlebois.info"
-			>
-				<li class="py-2">email</li>
-			</a>
-			<a class="text-sm font-medium contact-links" href="/publickey">
-				<li class="py-2">pgp</li>
-			</a>
 			<a
 				class="text-sm font-medium contact-links"
 				target="_blank"
@@ -95,68 +82,8 @@
 			>
 				<li class="py-2">github</li>
 			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://www.linkedin.com/in/vincent-charlebois/"
-			>
-				<li class="py-2">linkedin</li>
-			</a>
-			<a class="text-sm font-medium contact-links" target="_blank" href="https://chateau.social/@v">
-				<li class="py-2">mastodon</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://bsky.app/profile/charlebois.info"
-			>
-				<li class="py-2">bluesky</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://www.are.na/vincent-charlebois"
-			>
-				<li class="py-2">are.na</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://pinksky.app/profile/couleurs.bsky.social"
-			>
-				<li class="py-2">pinksky</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://twitter.com/vincencharleboi"
-			>
-				<li class="py-2">twitter</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://instagram.com/ffforests"
-			>
-				<li class="py-2">instagram</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://www.vincentcharlebois.net/"
-			>
-				<li class="py-2">portfolio</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://www.farcaster.xyz/xxc"
-			>
-				<li class="py-2">farcaster</li>
-			</a>
-
-			<a class="text-sm font-medium contact-links" target="_blank" href="https://vncnt.xyz">
-				<li class="py-2">.xyz</li>
+			<a class="text-sm font-medium contact-links" target="_blank" href="https://hypha.coop/">
+				<li class="py-2">hypha.coop</li>
 			</a>
 			<a
 				class="text-sm font-medium contact-links"
@@ -166,73 +93,26 @@
 			>
 				<li class="py-2">CV</li>
 			</a>
-			<a class="text-sm font-medium contact-links" href="/fr/portail">
-				<li class="py-2">portail</li>
-			</a>
-			<a
-				class="text-sm font-medium contact-links"
-				target="_blank"
-				href="https://vincent.charlebois.info/fr/"
-			>
-				<li class="py-2">.info</li>
-			</a>
-		</ul>
-		<p class="text-2xl text-left px-5 pt-7 pb-7 mt-12 mb-1 w-80">Sites web:</p>
-		<ul class="flex flex-row flex-wrap">
-			<a
-				href="http://couleurs.tripledoublev.com"
-				class="text-sm font-medium contact-links"
-				target="_blank"
-			>
-				<li class="py-2">2025 Pbhyrhef</li>
-			</a>
 			<a
-				href="https://tripledoublev.com/couleur"
-				class="text-sm font-medium contact-links"
-				target="_blank"
-			>
-				<li class="py-2">2024 Couleur de Montréal</li>
-			</a>
-			<a
-				href="https://vincent.charlebois.info/consecutive-days/"
-				class="text-sm font-medium contact-links"
-				target="_blank"
-			>
-				<li class="py-2">2023 Consecutive days at the studio</li>
-			</a>
-			<a href="https://postvis.io" class="text-sm font-medium contact-links" target="_blank">
-				<li class="py-2">2022 postvisions</li>
-			</a>
-			<a
-				href="https://www.couvre-feu.quebec/"
-				class="text-sm font-medium contact-links"
-				target="_blank"
-			>
-				<li class="py-2">2021 Je me souviens</li>
-			</a>
-			<a
-				href="https://vincentcharlebois.net//nodes.html"
 				class="text-sm font-medium contact-links"
 				target="_blank"
+				href="mailto:vincent@charlebois.info"
 			>
-				<li class="py-2">2018 nodes</li>
-			</a>
-			<a href="https://tripledoublev.net" class="text-sm font-medium contact-links" target="_blank">
-				<li class="py-2">2017 MCCM;nodes</li>
+				<li class="py-2">email</li>
 			</a>
 			<a
-				href="https://tripledoublev.net/rhytidome"
 				class="text-sm font-medium contact-links"
 				target="_blank"
+				href="https://www.linkedin.com/in/vincent-charlebois/"
 			>
-				<li class="py-2">2016 Rhytidome</li>
+				<li class="py-2">linkedin</li>
 			</a>
 			<a
-				href="https://tripledoublev.net/scroll"
 				class="text-sm font-medium contact-links"
 				target="_blank"
+				href="https://bsky.app/profile/charlebois.info"
 			>
-				<li class="py-2">2015 if 2 words</li>
+				<li class="py-2">bluesky</li>
 			</a>
 		</ul>
 	</div>
diff --git a/src/routes/fr/projets/+page.svelte b/src/routes/fr/projets/+page.svelte
index 40ffd5c..548dc29 100644
--- a/src/routes/fr/projets/+page.svelte
+++ b/src/routes/fr/projets/+page.svelte
@@ -17,7 +17,7 @@
 			'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;'
 		);
 		console.log(
-			'%cAnalyse du portfolio',
+			'%cProjets techniques et preuves de concept',
 			'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;'
 		);
 		console.log(
