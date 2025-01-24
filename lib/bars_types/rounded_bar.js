class rounded_bar {
    createBar() {
        const bar = document.createElement('div');
        bar.className = 'bar rounded_bar';
        return bar;
    }
}

window.rounded_bar = rounded_bar;