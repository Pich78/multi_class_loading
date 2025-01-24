class SquareBar {
    createBar() {
        const bar = document.createElement('div');
        bar.className = 'bar square-bar';
        return bar;
    }
}

window.SquareBar = SquareBar;