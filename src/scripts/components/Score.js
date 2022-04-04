import {store} from "../store/store";

export default {
    setup() {
        this.data.score = store.states.score;
    },
    data: {
        score: 0,
    },
    render() {
        return `
            <p>Score: ${this.data.score}</p>
        `;
    },
}