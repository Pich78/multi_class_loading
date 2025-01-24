class square_bar {
    createBar() {
        const bar = document.createElement('div');
        bar.className = 'bar square_bar';
        return bar;
    }
}

window.square_bar = square_bar;