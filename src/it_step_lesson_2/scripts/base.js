class ZoomImg {
    constructor(img) {
        this.elem = img;
        this.elem.addEventListener('mouseover', this.activateZoomImg.bind(this));
    }

    activateZoomImg() {
        this.render();
        this.wrapp();
        this.hendleEvents();
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('img__wrapper');

        this.focusBlock = document.createElement('div');
        this.focusBlock.classList.add('focus_block');

        this.imgMax = document.createElement('div');
        this.imgMax.classList.add('zoom');
        let pathBigImg = this.elem.getAttribute('data-img-max');
        this.imgMax.style.background = `url(${pathBigImg})`;
    }

    wrapp() {
        this.elem.before(this.wrapper);
        this.wrapper.appendChild(this.elem);
        this.wrapper.appendChild(this.focusBlock);
        this.wrapper.appendChild(this.imgMax);
    }

    hendleEvents() {
        this.elem.addEventListener('mousemove', this.getLocateFocusBlock.bind(this));
        this.elem.addEventListener('mousemove', this.getLocateImgMax.bind(this));
        this.elem.addEventListener('mouseleave', this.leave.bind(this));
    }

    getLocateFocusBlock(e) {
        // this.focusBlock.style.top = (e.offsetY - (this.focusBlock.offsetHeight / 2)) + 'px';
        // this.focusBlock.style.left = (e.offsetX - (this.focusBlock.offsetWidth / 2)) + 'px';
        let pos;
        let x;
        let y;
        e.preventDefault();
        pos = this.getCursorPos(e);
        x = pos.x - (this.focusBlock.offsetWidth / 2);
        y = pos.y - (this.focusBlock.offsetHeight / 2);
        if (x > this.elem.width - this.focusBlock.offsetWidth) {
            x = this.elem.width - this.focusBlock.offsetWidth;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > this.elem.height - this.focusBlock.offsetHeight) {
            y = this.elem.height - this.focusBlock.offsetHeight;
        }
        if (y < 0) {
            y = 0;
        }
        this.focusBlock.style.left = x + "px";
        this.focusBlock.style.top = y + "px";
    }
    getCursorPos(e) {
        let a;
        let x = 0;
        let y = 0;
        e = e || window.event;
        a = this.elem.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {
            x: x,
            y: y
        };
    }

    getLocateImgMax(e) {
        let x = e.offsetX * 100 / this.elem.offsetWidth;
        let y = e.offsetY * 100 / this.elem.offsetHeight;
        this.imgMax.style.backgroundPosition = x + '% ' + y + '%';
    }

    leave() {
        this.focusBlock.remove();
        this.imgMax.remove();
        this.wrapper.before(this.elem);
        this.wrapper.remove();
    }
}

document.querySelectorAll('[data-img-max]').forEach(function (img) {
    new ZoomImg(img);
})