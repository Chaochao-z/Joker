import component from "../utils/component";

import Draw from "./Draw";
import Pile from "./Pile";
import Score from "./Score";
import Connectivity from "./Connectivity";
import Stop from "./Stop";
import Result from "./Result";

const DRAW = component(Draw, document.querySelector('[data-component="Draw"]'));
const PILE = component(Pile, document.querySelector('[data-component="Pile"]'));
const SCORE = component(Score, document.querySelector('[data-component="Score"]'));
const CONNECTIVITY = component(Connectivity, document.querySelector('[data-component="Connectivity"]'));
const STOP = component(Stop, document.querySelector('[data-component="Stop"]'));
const RESULT = component(Result, document.querySelector('[data-component="Result"]'));

// Component that will be rendered when renderAll() is called
const components = [DRAW, PILE, SCORE, CONNECTIVITY, STOP];

const renderAll = () => components.forEach((component) => component.render())

export {
    renderAll,
    DRAW,
    PILE,
    SCORE,
    CONNECTIVITY,
    STOP,
    RESULT,
}