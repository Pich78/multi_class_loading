function loadCSS(filename) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = filename;
    document.head.appendChild(link);
}

function loadScript(filename, callback) {
    const script = document.createElement('script');
    script.src = filename;
    script.onload = callback;
    document.head.appendChild(script);
}

function renderBars(container) {
    const barTypes = ['square_bar', 'rounded_bar', 'arrow_bar'];

    barTypes.forEach(type => {
        const jsFile = `lib/bars_types/${type}.js`;
        const cssFile = `lib/bars_types/${type}.css`;

        loadCSS(cssFile);
        loadScript(jsFile, () => {
            const BarClass = window[type];
            const bar = new BarClass();
            container.appendChild(bar.createBar());
        });
    });
}