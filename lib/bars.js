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
    const barClasses = [
        { className: 'SquareBar', js: 'lib/bars_types/square_bar.js', css: 'lib/bars_types/square_bar.css' },
        { className: 'RoundedBar', js: 'lib/bars_types/rounded_bar.js', css: 'lib/bars_types/rounded_bar.css' },
        { className: 'ArrowBar', js: 'lib/bars_types/arrow_bar.js', css: 'lib/bars_types/arrow_bar.css' }
    ];

    barClasses.forEach(({ className, js, css }) => {
        loadCSS(css);
        loadScript(js, () => {
            const BarClass = window[className];
            const bar = new BarClass();
            container.appendChild(bar.createBar());
        });
    });
}