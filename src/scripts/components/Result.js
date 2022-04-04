import {store} from "../store/store";
import {RESULT, SCORE, PILE} from "./index";

export default {
    render() {
        return `
            <div class="result">
                <h1 class="result__title ${store.states.results.win ? 'result__title--win' : 'result__title--lose'}">
                    ${store.states.results.win ? 'You win' : 'You lose'}
                </h1> 
                <p class="result__score">Score: <span class="result__score__number">${store.states.score}</span></p>
                <div class="result__actions">
                    <button id="restart-game-button" class="btn btn--blue">New game</button>
                </div>
            </div>
        `;
    },
    mounted() {
        document.getElementById('restart-game-button').addEventListener('click', async () => {
            await PILE.render();
            SCORE.render();
            RESULT.destroy();
        })
    },
}