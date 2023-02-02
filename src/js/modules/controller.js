export class Controller {
    constructor() {
        // CLOCK ELEMENT
        this._clock = document.getElementById('container');
        this._container = document.getElementById('clock');
        // ALL CONTROLLER ELEMENTS
        this._play = document.getElementById('play');
        this._lap = document.getElementById('lap');
        this._reset = document.getElementById('reset');
    }

    setActive() {
        this.setPauseSVG();
        this._container.classList.add('active');
        this._clock.classList.add('active');
        this._lap.disabled = false;
    }

    unsetActive() {
        this.setPlaySVG();
        this._container.classList.remove('active');
        this._clock.classList.remove('active');
        this._lap.disabled = true;
    }

    setPlaySVG() {
        this._play.innerHTML = ` <svg style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g id="info" /><g id="icons"><path d="M3.9,18.9V5.1c0-1.6,1.7-2.6,3-1.8l12,6.9c1.4,0.8,1.4,2.9,0,3.7l-12,6.9C5.6,21.5,3.9,20.5,3.9,18.9z" mid="play" /></g></svg >`;
    }

    setPauseSVG() {
        this._play.innerHTML = `<svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"/></svg>`;
    }

} 