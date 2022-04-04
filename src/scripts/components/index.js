import component from "../utils/component";

import Draw from "./Draw";
import Pile from "./Pile";
import Score from "./Score";
import Connectivity from "./Connectivity";
import Stop from "./Stop";

const DRAW = component(Draw, document.querySelector('[data-component="Draw"]'));
const PILE = component(Pile, document.querySelector('[data-component="Pile"]'));
const SCORE = component(Score, document.querySelector('[data-component="Score"]'));
const CONNECTIVITY = component(Connectivity, document.querySelector('[data-component="Connectivity"]'));
const STOP = component(Stop, document.querySelector('[data-component="Stop"]'));

const components = [DRAW, PILE, SCORE, CONNECTIVITY, STOP];

const renderAll = () => components.forEach((component) => component.render())

export {
    renderAll,
    DRAW,
    PILE,
    SCORE,
    CONNECTIVITY,
    STOP,
}