export function initializePortal() {
	console.log('help me please');
	const sites = [
		{ url: 'https://aos.arebyte.com/contents/hervisions-the-art-of-no-likes/', https: true },
		{ url: 'https://lattice.tools/MemStackShapeTracer', https: true },
		{ url: 'https://possible.social/', https: true },
		{
			url: 'http://sandracrispart.com/index.php/art-of-no-likes-launch/',
			https: false,
			img: 'sandracrispart.jpg'
		},
		{ url: 'http://julietagil.com/Nuestra-Victoria', https: false, img: 'julietagil.jpg' },
		{ url: 'https://www.ourmachine.net/', https: true },
		{ url: 'https://barrythrew.com/', https: true },
		{ url: 'https://www.badalmer.com/', https: true },
		{ url: 'https://dietrichmeyer.info/', https: true },
		{ url: 'https://towhomthismayconcern.org/', https: true },
		{ url: 'https://anti-materia.org/', https: true },
		{ url: 'https://a.pureapparat.us/', https: true },
		{ url: 'http://www.isladen.world/', https: false, img: 'isladen.jpg' },
		{ url: 'https://michaelreale.format.com/', https: true },
		{ url: 'https://www.carsonteal.com/', https: true },
		{ url: 'https://boringmommyblogblog.wordpress.com/', https: true },
		{ url: 'https://vincentcharlebois.com/', https: true },
		{ url: 'https://vincentcharlebois.net/', https: true },
		{ url: 'https://vincent.charlebois.info/', https: true },
		{ url: 'https://verns.world', https: true },
		{ url: 'https://palomakop.tv/', https: true },
		{ url: 'https://garbageprintcamo.wordpress.com/', https: true },
		{ url: 'https://www.hemligaskolan.se/', https: true },
		{ url: 'https://yletalgnimlab.me/', https: true },
		{ url: 'https://eviau.github.io/thiswebsite/index.html', https: true },
		{ url: 'http://dagmarschuerrer.com/', https: false, img: 'dagmarschuerrer.jpg' },
		{ url: 'https://rozina.neocities.org/', https: true },
		{ url: 'https://www.francescoimola.com/', https: true },
		{ url: 'https://lattice.tools/', https: true },
		{ url: 'https://preppers.gallery/', https: true },
		{ url: 'https://www.hervisions.world/', https: true },
		{ url: 'http://lovelanguages.melaniehoff.com/', https: false, img: 'digitallovelanguages.png' },
		{ url: 'http://www.srswthi.com/', https: false, img: 'saraswathisubbaraman.png' },
		{ url: 'https://kevinclancy.studio/', https: true },
		{ url: 'http://www.offsiteproject.org/', https: false, img: 'offsiteproject.png' },
		{ url: 'https://www.tuckernickman.com/beginning.html', https: true },
		{ url: 'http://joemygan.com/', https: false, img: 'joemygan.jpg' },
		{ url: 'https://kaleyflowers.com/', https: true },
		{ url: 'https://www.charlebois.solutions/', https: true },
		{ url: 'https://vincent.charlebois.info/', https: true },
		{ url: 'https://www.couvre-feu.quebec/', https: true },
		{ url: 'https://www.postvis.io/', https: true },
		{ url: 'https://www.vincentcharlebois.net/e.html', https: true },
		{ url: 'https://madrid.tripledoublev.net/', https: true },
		{ url: 'https://casablanca.tripledoublev.net/', https: true },
		{ url: 'https://vncnt.xyz/', https: true },
		{ url: 'https://www.vincentcharlebois.net/', https: true },
		{ url: 'https://ffforests.xyz/', https: true },
		{ url: 'https://hypha.coop/', https: true },
		{ url: 'https://vincent.charlebois.info/consecutive-days/', https: true },
		{ url: 'https://vincent.charlebois.info/consecutive-days/29_Oct16-Oct19.html', https: true },
		{ url: 'https://vincent.charlebois.info/consecutive-days/30_Oct24-Oct25.html', https: true },
		{ url: 'https://vincent.charlebois.info/consecutive-days/59_Feb8-Feb11.html', https: true },
		{ url: 'https://tripledoublev.github.io/CV/', https: true },
		{ url: 'https://www.vincentcharlebois.net/n.html', https: true },
		{ url: 'https://www.charlebois.solutions/c/', https: true },
		{ url: 'https://vincent.charlebois.info/consecutive-days/00_All_Days.html', https: true },
		{ url: 'https://vincent.charlebois.info/consecutive-days/64_Feb28.html', https: true },
		{ url: 'https://acclivities.eth.limo', https: true },
		{ url: 'https://vncnt.xyz/horloge', https: true }
	];
	console.log('aaaaaaaaaaaaaaaaaaaa');
	const div = document.createElement('div');
	const getRandInRange = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	const site = sites[getRandInRange(0, sites.length - 1)];

	const horizontal = getRandInRange(0, window.innerWidth / 2);
	const vertical = getRandInRange(100, window.innerHeight - 100);

	let inner;

	if (site.https) {
		inner = document.createElement('iframe');
		inner.setAttribute('src', site.url);
		inner.setAttribute('scrolling', 'no');
		inner.setAttribute('title', 'Art of No Likes');
		inner.style.width = '1000px';
		inner.style.height = '500px';
		inner.style.overflow = 'hidden';
	} else {
		inner = document.createElement('img');
		inner.setAttribute('src', `https://possible.social/${site.img}`);
		inner.setAttribute('scrolling', 'no');
		inner.style.overflow = 'hidden';
	}

	const arrow = document.createElement('img');
	arrow.setAttribute('src', 'https://possible.social/arrow.png');
	arrow.style.position = 'fixed';
	arrow.style.width = '30px';
	arrow.style.top = `${vertical - 7}px`;
	arrow.style.left = `${horizontal - 18}px`;
	arrow.style.zIndex = '110';

	const question = document.createElement('img');
	question.setAttribute('src', 'https://possible.social/question.png');
	question.style.position = 'fixed';
	question.style.width = '25px';
	question.style.top = `${vertical + 130}px`;
	question.style.left = `${horizontal + 132}px`;
	question.style.zIndex = '110';

	const close = document.createElement('img');
	close.setAttribute('src', 'https://possible.social/static/media/close.c060470e.png');
	close.style.position = 'fixed';
	close.style.width = '25px';
	close.style.top = `${vertical - 7}px`;
	close.style.left = `${horizontal + 132}px`;
	close.style.zIndex = '110';
	close.addEventListener('click', () => {
		div.remove();
	});

	const a = document.createElement('a');
	a.setAttribute('href', site.url);
	a.setAttribute('target', '_blank');
	a.appendChild(arrow);

	const a2 = document.createElement('a');
	a2.setAttribute('href', 'https://possible.social/join');
	a2.setAttribute('target', '_blank');
	a2.appendChild(question);

	const portal = document.createElement('div');
	portal.style.width = '150px';
	portal.style.height = '150px';
	portal.style.border = 'white';
	portal.style.borderStyle = 'solid';
	portal.style.borderWidth = '10px';
	portal.style.overflow = 'auto';
	portal.style.position = 'fixed';
	portal.style.webkitOverflowScrolling = 'touch';
	portal.style.top = `${vertical}px`;
	portal.style.left = `${horizontal}px`;
	portal.style.zIndex = '100';
	portal.appendChild(inner);

	div.appendChild(portal);
	div.appendChild(a);
	div.appendChild(a2);
	div.appendChild(close);
	document.body.appendChild(div);
}

console.log('Hello hello heloofrom src/lib/index.js!');
