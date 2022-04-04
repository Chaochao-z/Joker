import {store} from "../store/store";
import {cardValueToNb} from "../utils/conversions";
import {PILE, SCORE} from "./index";

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
            PILE.render();
            SCORE.render();
            alert('Score:' + store.states.score)
            await store.commits.game.resetGame();
        })
    },
}