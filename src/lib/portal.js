export function initializePortal() {
	// Add global error handler to prevent iframe errors from bubbling up
	const originalErrorHandler = window.onerror;
	window.onerror = function(message, source, lineno, colno, error) {
		// Check if the error is coming from an iframe
		if (source && source.includes('iframe') || message.includes('media devices') || message.includes('user agent')) {
			return true; // Prevent the error from being logged
		}
		// Call original error handler for other errors
		if (originalErrorHandler) {
			return originalErrorHandler(message, source, lineno, colno, error);
		}
		return false;
	};

	const sites = [
		{ url: 'https://aos.arebyte.com/contents/hervisions-the-art-of-no-likes/', https: true },
		{ url: 'https://lattice.tools/MemStackShapeTracer', https: true },
		{ url: 'https://possible.social/', https: true },
		{
			url: 'http://sandracrispart.com/index.php/art-of-no-likes-launch/',
			https: false
		},
		{ url: 'http://julietagil.com/Nuestra-Victoria', https: false },
		{ url: 'https://www.ourmachine.net/', https: true },
		{ url: 'https://barrythrew.com/', https: true },
		{ url: 'https://www.badalmer.com/', https: true },
		{ url: 'https://dietrichmeyer.info/', https: true },
		{ url: 'https://towhomthismayconcern.org/', https: true },
		{ url: 'https://anti-materia.org/', https: true },
		{ url: 'https://a.pureapparat.us/', https: true },
		{ url: 'http://www.isladen.world/', https: false },
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
		{ url: 'http://dagmarschuerrer.com/', https: false },
		{ url: 'https://rozina.neocities.org/', https: true },
		{ url: 'https://www.francescoimola.com/', https: true },
		{ url: 'https://lattice.tools/', https: true },
		{ url: 'https://preppers.gallery/', https: true },
		{ url: 'https://www.hervisions.world/', https: true },
		{ url: 'http://lovelanguages.melaniehoff.com/', https: false },
		{ url: 'http://www.srswthi.com/', https: false },
		{ url: 'https://kevinclancy.studio/', https: true },
		{ url: 'http://www.offsiteproject.org/', https: false },
		{ url: 'https://www.tuckernickman.com/beginning.html', https: true },
		{ url: 'http://joemygan.com/', https: false },
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
		{ url: 'https://ffforests.xyz/v', https: true },
		{ url: 'https://hypha.coop/', https: true },
		{ url: 'https://handbook.hypha.coop/', https: true },
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
		{ url: 'https://vncnt.xyz/horloge', https: true },
		{ url: 'https://vincent.charlebois.info/en/couleur', https: true },
		{ url: 'https://www.ffforests.xyz/v/', https: true },
		{ url: 'https://www.charlebois.solutions/ascii/', https: true },
		{ url: 'https://www.charlebois.solutions/cam/', https: true },
		{ url: 'https://www.charlebois.solutions/v/', https: true },
		{ url: 'https://vincent.charlebois.info/en/couleur/', https: true }
	];
	const div = document.createElement('div');
	const getRandInRange = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	const site = sites[getRandInRange(0, sites.length - 1)];

	const horizontal = getRandInRange(0, window.innerWidth * 0.9);
	const vertical = getRandInRange(window.innerHeight * 0.7, window.innerHeight * 0.86);
	let inner;

	if (site.https) {
		inner = document.createElement('iframe');
		inner.setAttribute('src', site.url);
		inner.setAttribute('scrolling', 'no');
		inner.setAttribute('title', 'Art of No Likes');
		// Add sandbox attributes to restrict iframe permissions and prevent media access
		inner.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');
		inner.style.width = '1000px';
		inner.style.height = '500px';
		inner.style.overflow = 'hidden';
		
		// Add error handling to prevent alerts from bubbling up
		inner.addEventListener('load', () => {
			try {
				// Override alert, confirm, and prompt in the iframe context
				const iframeWindow = inner.contentWindow;
				if (iframeWindow) {
					iframeWindow.alert = () => {}; // Silently ignore alerts
					iframeWindow.confirm = () => false; // Always return false for confirms
					iframeWindow.prompt = () => null; // Always return null for prompts
					
					// Override console methods to prevent error logging
					iframeWindow.console = {
						log: () => {},
						warn: () => {},
						error: () => {},
						info: () => {},
						debug: () => {}
					};
				}
			} catch (e) {
				// Ignore cross-origin errors
			}
		});
		
		// Handle iframe errors
		inner.addEventListener('error', (e) => {
			e.preventDefault();
			e.stopPropagation();
		});
		
	} else {
		inner = document.createElement('img');
		inner.setAttribute('src', `https://www.vincentcharlebois.com/${site.img}`);
		inner.setAttribute('scrolling', 'no');
		inner.style.overflow = 'hidden';
	}

	const arrow = document.createElement('img');
	arrow.setAttribute('src', 'https://www.vincentcharlebois.com/arrow.png');
	arrow.style.position = 'absolute';
	arrow.style.width = '30px';
	arrow.style.top = `${vertical - 7}px`;
	arrow.style.left = `${horizontal - 18}px`;
	arrow.style.zIndex = '110';

	const question = document.createElement('img');
	question.setAttribute('src', 'https://www.vincentcharlebois.com/question.png');
	question.style.position = 'absolute';
	question.style.width = '25px';
	question.style.top = `${vertical + 130}px`;
	question.style.left = `${horizontal + 132}px`;
	question.style.zIndex = '110';

	const close = document.createElement('img');
	close.setAttribute('src', 'https://www.vincentcharlebois.com/close.c060470e.png');
	close.style.position = 'absolute';
	close.style.width = '25px';
	close.style.top = `${vertical - 7}px`;
	close.style.left = `${horizontal + 132}px`;
	close.style.zIndex = '110';
	close.style.cursor = 'pointer';
	close.addEventListener('click', () => {
		div.remove();
	});

	const a = document.createElement('a');
	a.setAttribute('href', site.url);
	a.setAttribute('target', '_blank');
	a.appendChild(arrow);

	const a2 = document.createElement('a');
	a2.setAttribute(
		'href',
		'https://web.archive.org/web/20240412123630/https://possible.social/join'
	);
	a2.setAttribute('target', '_blank');
	a2.appendChild(question);

	const portal = document.createElement('div');
	portal.style.width = '150px';
	portal.style.height = '150px';
	portal.style.border = 'white';
	portal.style.borderStyle = 'solid';
	portal.style.borderWidth = '10px';
	portal.style.overflow = 'auto';
	portal.style.position = 'absolute';
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
