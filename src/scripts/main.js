import '../css/style.scss'

import {store} from "./store/store";

import component from "./utils/component";

import Draw from "./components/Draw";
import Pile from "./components/Pile";

await store.commits.deck.generateDeck();


function renderDraw() {
    component(Draw, document.getElementById('draw'));
}
renderDraw();

function renderPile() {
    console.log('test')
    component(Pile, document.getElementById('pile'));
}
renderPile();

export {
    renderPile,
    renderDraw,
}