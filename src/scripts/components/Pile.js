import {store} from "../store/store";

export default {
    setup() {
        const pile = store.states.pile;
        const nodeList = [];
        if (pile.length) {
            pile.forEach((card) => {
                const node = document.createElement('li');
                node.innerText = JSON.stringify(card);
                nodeList.push(node);
            })
        }
        this.data.htmlElements = nodeList.map((node) => `<li>${node.innerHTML}</li>`).join('')
    },
    data: {
        htmlElements: null,
    },
    render() {
        return `
            <div>
                <p>Pile:</p>
                <ul>${this.data.htmlElements}</ul>
            </div>
        `;
    },
}