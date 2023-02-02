import { Updater } from "./updater.js";

export class Clock {
    constructor(controller) {
        this.controller = controller;
        this.controller.setActive();
        this.hours = this.minutes = this.seconds = this.milliseconds = 0;

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
        Updater.resetHTML();

        // CLEAR INTERVAL
        clearInterval(this.updater);
        this.updater = null;
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