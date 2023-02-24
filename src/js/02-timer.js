import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";



const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');

startButton.setAttribute("disabled", true)

const picker = flatpickr (dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= Date.now()) {
            Notify.failure("Please choose a date in the future")
            return
        } 
        startButton.removeAttribute("disabled")
    console.log(selectedDates[0]);
  },
});


startButton.addEventListener("click", (e) => {
    e.target.setAttribute("disabled", true)
    const timerId = setInterval(() => {

        const difference = picker.selectedDates[0] - Date.now()
        if (difference <= 0) {
            clearInterval(timerId)
            return
        }
        console.log(convertMs(difference));
        const { days, hours, minutes, seconds } = convertMs(difference)
        daysField.textContent = addLeadingZero(days)
        hoursField.textContent = addLeadingZero(hours)
        minutesField.textContent = addLeadingZero(minutes)
        secondsField.textContent = addLeadingZero(seconds)
}, 1000) 
})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, "0")
    
}