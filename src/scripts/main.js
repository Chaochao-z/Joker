import '../css/style.scss'

import {store} from "./store/store";

import component from "./utils/component";

import Draw from "./components/Draw";
import Pile from "./components/Pile";

await store.commits.deck.generateDeck();

component(Draw, document.getElementById('draw'));
component(Pile, document.getElementById('pile'));