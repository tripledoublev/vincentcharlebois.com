<script>
    import { t } from 'svelte-i18n';
    import { onMount, afterUpdate } from 'svelte';

    let sea = '';
    let seaWidth;
    let seaHeight; 
    let lineHeight;
    const waveChars = ["'", ".", ",", "-", "=", "_", "<", ">", "~", "^"];
    let lastTime = 0;
    const interval = 100;

    let datP;
    let charWidth;

    function measureCharWidth() {
        const span = document.createElement('span');
        span.textContent = 'A'; 
        document.body.appendChild(span);
        charWidth = span.getBoundingClientRect().width - 0.2;
        lineHeight = parseFloat(window.getComputedStyle(span).lineHeight);
        document.body.removeChild(span);
    }

    function updateSeaDimensions() {
        if (datP) {
            const rect = datP.getBoundingClientRect();
            seaWidth = Math.floor(rect.width / charWidth);
            seaHeight = Math.floor(rect.height / lineHeight);
        }
    }

    function createSea() {
        let newSea = '';
        for (let i = 0; i < seaHeight; i++) {
            for (let j = 0; j < seaWidth; j++) {
                newSea += waveChars[Math.floor(Math.random() * waveChars.length)];
            }
            newSea += '\n';
        }
        return newSea;
    }

    function animateSea(timestamp) {
        if (timestamp - lastTime >= interval) {
            sea = createSea();
            lastTime = timestamp;
        }
        requestAnimationFrame(animateSea);
    }

    onMount(() => {
        measureCharWidth();
        updateSeaDimensions();
        window.addEventListener('resize', updateSeaDimensions);
        requestAnimationFrame(animateSea);

        return () => {
            window.removeEventListener('resize', updateSeaDimensions);
        };
    });

    afterUpdate(() => {
        updateSeaDimensions();
    });
</script>

<p id="sea" class="whitespace-pre">{sea}</p>


<p bind:this={datP} class='text-justify [text-align-last:justify]'>
    {$t('basic')}
</p>


