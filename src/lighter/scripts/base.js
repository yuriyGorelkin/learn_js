function lighterSwitcher() {
    const globalSwitcher = document.querySelector('.lighter__switcher');
    const lighterLamps = document.querySelectorAll('.lighter__lamp');

    let isEnabled = false;

    globalSwitcher.addEventListener('click', lightersSwitch);
    

    function lightersSwitch() {
        if (isEnabled) {
            switchOFFALL();
            console.log ('OFFAll');           
        } else {
            switchONALL();
            console.log ('ONAll');   
        }        
    }

    function switchONALL() {
        isEnabled = true;
        switchToggle ();  
    }

    function switchOFFALL() {
        lighterLamps.forEach((lamp) => {
            lamp.classList.remove('shine');
        });
        isEnabled = false;        
    }

    function switchToggle () {
    lighterLamps.forEach((lamp) => {
        lamp.addEventListener('click', activeLamp);

        function activeLamp() {
          lamp.classList.toggle('shine');
          isEnabled = true;
        }           
    });
  }
}

lighterSwitcher();