import component from "../utils/component";

import Draw from "./Draw";
import Pile from "./Pile";

const DRAW = component(Draw, document.getElementById('draw'));
const PILE = component(Pile, document.getElementById('pile'));

const components = [DRAW, PILE];

const renderAll = () => components.forEach((component) => component.render())


export {
    renderAll,
    DRAW,
    PILE,
}