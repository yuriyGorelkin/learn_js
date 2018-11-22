class ZoomImg {
    constructor(img) {
        this.elem = img;
        this.elem.addEventListener('mouseover', this.over.bind(this));
    }
    
    over() {
        this.imgMax = document.createElement('div');
        this.imgMax.classList.add('zoom');
        let pathBigImg = this.elem.getAttribute('data-img-max');
        this.imgMax.style.background = `url(${pathBigImg})`;
        this.wrapp();
        this.elem.addEventListener('mouseleave', this.leave.bind(this));
        this.elem.addEventListener('mousemove', this.move.bind(this));
    }
    
    wrapp() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('img__wrapper');
        this.elem.before(this.wrapper);
        this.wrapper.appendChild(this.elem);
        this.wrapper.appendChild(this.imgMax);
    }
    
    leave() {
        this.imgMax.remove();
        this.wrapper.before(this.elem);
        this.wrapper.remove();
    }
    
    move(e) {
        let x = e.offsetX * 100 / this.elem.offsetWidth;
        let y = e.offsetY * 100 / this.elem.offsetHeight;
        this.imgMax.style.backgroundPosition = x + '% ' + y + '%';
    }
}

document.querySelectorAll('[data-img-max]').forEach(function (img) {
    new ZoomImg(img);
})