import '../css/style.scss'

import {store} from "./store/store";

(async() => await store.commits.deck.generateDeck())()


import {renderAll} from "./components";
renderAll();
