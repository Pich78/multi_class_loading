class ArrowBar {
    createBar() {
        const bar = document.createElement('div');
        bar.className = 'bar arrow-bar';
        return bar;
    }
}

window.ArrowBar = ArrowBar;