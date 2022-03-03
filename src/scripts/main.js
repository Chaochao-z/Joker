import '../css/style.scss'

import game from "./components/Game";
import draw from "./components/Draw";

import {generateRandId} from "./utils/generators";

import aComponent from "./utils/component";

// aComponent(game);
aComponent(draw, document.getElementById('draw'));