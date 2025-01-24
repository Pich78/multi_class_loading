class RoundedBar {
    createBar() {
        const bar = document.createElement('div');
        bar.className = 'bar rounded-bar';
        return bar;
    }
}

window.RoundedBar = RoundedBar;