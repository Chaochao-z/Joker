import '../css/style.scss'

import {store} from "./store/store";
await store.commits.deck.generateDeck();

import {renderAll} from "./components";
renderAll();