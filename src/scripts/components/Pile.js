import {store} from "../store/store";

const pile = store.states.pile;
const nodeList = [];
if (pile.length) {
    pile.forEach((card) => {
        const node = document.createElement('li');
        node.innerText = JSON.stringify(card);
        nodeList.push(node);
    })
}
const htmlElements = nodeList.map((node) => `<li>${node.innerHTML}</li>`).join('')

export default {
    render() {
        return `
            <div>
                <p>Pile:</p>
                <ul>${htmlElements}</ul>
            </div>
        `;
    },
}