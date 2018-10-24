/**
 * @param {HTMLElement} el 
 * @param {Array} optionsList 
 */

function dropdown(el, optionsList) {
    const titleEl = el.querySelector('.dropdown__title');
    let isOpened = el.classList.contains('opened');

    function close() {        
        isOpened = false;
        el.classList.remove('opened');
        document.removeEventListener('click', close);
    }

    function open() {
        isOpened = true;
        el.classList.add('opened');
        document.addEventListener('click', close);
    }

    function toggle(e) {
        e.stopPropagation();

        if (isOpened) {
            setTitle (e.target.textContent);
            close();
        } else {
            open();
        }
    }

    function setTitle (text) {
        titleEl.textContent = text;
    }

    el.addEventListener('click', (e) => {
        toggle(e);
    });

    el.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            toggle(e);
        }
    });
}

const moviesList = ['Shrek', 'Lost', 'Star Wars'];

dropdown(document.querySelector('#moviesDropdownMenu'));
dropdown(document.querySelector('#countriesDropdownMenu'));