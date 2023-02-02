import { formatter } from './other/utils.js';

// ALL CLOCK ELEMENTS
const _hours = document.getElementById('hours');
const _minutes = document.getElementById('minutes');
const _seconds = document.getElementById('seconds');
const _milliseconds = document.getElementById('milliseconds');
// LAPS CONTAINER
const _laps = document.getElementById('laps');

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

    static updateLaps(lap) {
        if (!_laps.classList.contains('show')) {
            _laps.classList.add('show');
        }

        _laps.firstElementChild.insertAdjacentHTML('afterend',
            `
            <tr class="row">
                <td>${lap.id}</td>
                <td>${lap.time}</td>
            </tr>
        `);
    }

    static clearLaps() {
        _laps.innerHTML = `     
        <tbody class="laps__header">            
            <tr>
                <th class="id">ID</th>
                <th class="time">Time</th>
            </tr> 
        </tbody>`;
        _laps.classList.remove('show');
    }
}