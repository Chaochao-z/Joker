import {store} from "../store/store";

export default {
    render() {
        return `
            <button id="draw-btn">DRAW</button>
        `;
    },
    mounted() {
        document.getElementById("draw-btn").addEventListener('click', async () => {
            console.log('DRAW A CARD')
            await store.commits.deck.drawCard();
        })
    }
}