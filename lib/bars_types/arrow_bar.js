class arrow_bar {
    createBar() {
        const bar = document.createElement('div');
        bar.className = 'bar arrow_bar';
        return bar;
    }
}

window.arrow_bar = arrow_bar;