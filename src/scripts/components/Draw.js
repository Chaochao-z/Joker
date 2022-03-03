export default {
    render() {
        return `
            <button id="draw">DRAW</button>
        `;
    },
    data: {
        cardCount: 0,
    },
    mounted(data) {
        document.getElementById("draw").addEventListener('click', () => {
            console.log('DRAW A CARD')
            data.cardCount++;
        })
    }
}