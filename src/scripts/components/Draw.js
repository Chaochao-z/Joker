import {store} from "../store/store";
import {PILE, SCORE} from "./index";
import {cardValueToNb} from "../utils/conversions";

export default {
    render() {
        return `
            <button id="draw-btn" class="btn">DRAW</button>
        `;
    },
    mounted() {
        document.getElementById("draw-btn").addEventListener('click', async () => {
            await store.commits.deck.drawCard();
            await store.commits.deck.addCardToPile();
            const card = store.states.card;
            await store.commits.score.addScore(cardValueToNb(card.value));
            PILE.render();
            SCORE.render();
        })
    }
}