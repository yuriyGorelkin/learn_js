function lampWidget(rootElementSelector) {
  const rootElement = document.querySelector(rootElementSelector);
  const lamps = rootElement.querySelectorAll('.lamp');
  const globalSwitcher = rootElement.querySelector('.globalSwitcher');
  
  let isEnabled = true;

  lamps.forEach((lamp) => {
    const btnToggle = lamp.querySelector('.lamp__switcher');
    btnToggle.addEventListener('click', toggleLight);

    function toggleLight() {
        lamp.classList.toggle('lamp_toggle');
        isEnabled = true;
    }
  });
  
  globalSwitcher.addEventListener('click', switchAll);

  function switchAll() {
      if (isEnabled) {
        switchOffAll();
      } else {
        switchOnAll();
      }
  }

  function switchOffAll() {
    lamps.forEach((lamp) => {
      lamp.classList.remove('lamp_toggle');
    });
    isEnabled = false;
  }

function switchOnAll() {
    lamps.forEach((lamp) => {
      lamp.classList.add('lamp_toggle');
    });
    isEnabled = true;
  }
}

lampWidget('#lamps');