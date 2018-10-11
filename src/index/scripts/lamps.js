const lampWidget = document.querySelector('.lamp');
const lighter = document.querySelector('.lamp__lighter');
const btnToggle = document.querySelector('.lamp__switcher');

btnToggle.onclick = toggleLight;

function toggleLight() {
    lampWidget.classList.toggle('lamp_toggle');
}