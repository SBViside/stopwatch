import { formatter } from "./other/utils.js";
import { Updater } from "./updater.js";

export class Clock {
    constructor(controller) {
        this.controller = controller;
        this.controller.setActive();
        this.hours = this.minutes = this.seconds = this.milliseconds = 0;
        this.laps = [];
        // SET INTERVAL
        this.updater = setInterval(() => this.incMilliseconds(), 10);
    }

    pause() {
        this.controller.unsetActive();
        clearInterval(this.updater);
        this.updater = null;
    }

    unpause() {
        this.controller.setActive();
        this.updater = setInterval(() => this.incMilliseconds(), 10);
    }

    reset() {
        this.controller.unsetActive();
        this.hours = this.minutes = this.seconds = this.milliseconds = 0;
        this.laps = [];
        Updater.resetHTML();
        Updater.clearLaps();

        // CLEAR INTERVAL
        clearInterval(this.updater);
        this.updater = null;
    }

    addLap() {
        if (this.laps.length >= 20) return;
        const newLap = { id: this.laps.length + 1, time: `${formatter(this.hours)}:${formatter(this.minutes)}:${formatter(this.seconds)},${formatter(this.milliseconds)}` };
        this.laps = [newLap, ...this.laps];
        Updater.updateLaps(newLap);
    }

    incHours() {
        this.hours += 1;
        Updater.hoursHTML(this.hours);
    }

    incMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this.incHours();
        }
        Updater.minutesHTML(this.minutes);
    }

    incSeconds() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.incMinutes();
        }
        Updater.secondsHTML(this.seconds);
    }

    incMilliseconds() {
        this.milliseconds += 1;
        if (this.milliseconds === 100) {
            this.milliseconds = 0;
            this.incSeconds();
        }
        Updater.millisecondsHTML(this.milliseconds);
    }
}