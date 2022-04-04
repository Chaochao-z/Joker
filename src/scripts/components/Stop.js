import {store} from "../store/store";
import {cardValueToNb} from "../utils/conversions";
import {PILE, SCORE, RESULT} from "./index";

export default {
    render() {
        return `
            <button id="stop-btn" class="btn btn--red">STOP</button>
        `;
    },
    mounted() {
        document.getElementById('stop-btn').addEventListener('click', async () => {
            await store.commits.deck.drawCard();
            await store.commits.deck.addCardToPile();
            const card = store.states.card;
            await store.commits.score.addScore(cardValueToNb(card.value));
            await store.commits.game.defineResults();
            PILE.render();
            SCORE.render();
            RESULT.render();
            await store.commits.game.resetGame();
        })
    },
}