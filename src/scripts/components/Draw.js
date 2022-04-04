import {store} from "../store/store";
import {PILE} from "./index";

export default {
    render() {
        return `
            <button id="draw-btn">DRAW</button>
        `;
    },
    mounted() {
        document.getElementById("draw-btn").addEventListener('click', async () => {
            await store.commits.deck.drawCard();
            await store.commits.deck.addCardToPile();
            console.log(store.states.pile);
            PILE.render();
        })
    }
}