import {store} from "../store/store";

export default {
    setup() {
        const pile = store.states.pile;
        if (pile.length) {
            this.data.htmlElements = pile.map((card) => `
            <li class="game__pile__list__item"><img src="${card.image}"/></li>`).join('')
        }
    },
    data: {
        htmlElements: '',
    },
    render() {
        return `
            <ul class="game__pile__list">${this.data.htmlElements}</ul>
        `;
    },
}