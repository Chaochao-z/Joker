import '../css/style.scss'

import {store} from "./store/store";

import component from "./utils/component";

import draw from "./components/Draw";

import connectivity from "./components/Connectivity";

await store.commits.deck.generateDeck();

component(draw, document.getElementById('draw'));
component(connectivity, document.getElementById('connectivity'));