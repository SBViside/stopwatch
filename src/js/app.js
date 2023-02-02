import { Clock } from './modules/clock.js';
import { Controller } from './modules/controller.js';
import * as flsFunctions from './modules/other/functions.js';

flsFunctions.isWebp();

// MAIN APP
let clock = null;
const controller = new Controller();

// HANDLERS
controller._play.addEventListener('click', (e) => {
    if (clock) {
        clock.updater ? clock.pause() : clock.unpause();
    } else {
        clock = new Clock(controller);
    }
});

controller._lap.addEventListener('click', (e) => {
    // CREATE A LAP
});

controller._reset.addEventListener('click', (e) => {
    clock.reset();
});







