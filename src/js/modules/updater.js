import { formatter } from './other/utils.js';

// ALL CLOCK ELEMENTS
const _hours = document.getElementById('hours');
const _minutes = document.getElementById('minutes');
const _seconds = document.getElementById('seconds');
const _milliseconds = document.getElementById('milliseconds');

// UPDATER CLASS
export class Updater {
    static hoursHTML(value) {
        _hours.textContent = formatter(value);
    }
    static minutesHTML(value) {
        _minutes.textContent = formatter(value);
    }
    static secondsHTML(value) {
        _seconds.textContent = formatter(value);
    }
    static millisecondsHTML(value) {
        _milliseconds.textContent = formatter(value);
    }
    static resetHTML() {
        this.hoursHTML(0);
        this.minutesHTML(0);
        this.secondsHTML(0);
        this.millisecondsHTML(0);
    }
}