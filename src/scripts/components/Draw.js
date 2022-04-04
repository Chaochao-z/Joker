import {store} from "../store/store";
import {PILE, RESULT, SCORE} from "./index";
import {cardValueToNb} from "../utils/conversions";
import score from "./Score";

export default {
    render() {
        return `
            <button id="draw-btn" class="btn btn--blue">DRAW</button>
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
            if (store.states.score === 21) {
                await store.commits.game.defineResults('win');
                PILE.render();
                SCORE.render();
                RESULT.render();
                await store.commits.game.resetGame();
            } else if (store.states.score > 21) {
                await store.commits.game.defineResults('lose');
                PILE.render();
                SCORE.render();
                RESULT.render();
                await store.commits.game.resetGame();
            }
        })
    }
}