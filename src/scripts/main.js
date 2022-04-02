import '../css/style.scss'

import {store} from "./store/store";

import component from "./utils/component";

import draw from "./components/Draw";

await store.commits.deck.generateDeck();

component(draw, document.getElementById('draw'));