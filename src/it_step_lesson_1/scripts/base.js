const img = document.querySelector(".div img");

img.addEventListener('mouseover', (e)=> {
    const imgMax = document.createElement('div');
   
    imgMax.classList.add('zoom');
    let pathBigImg = e.target.getAttribute('data-img-max');
    imgMax.style.background = `url(${pathBigImg})`;
    img.parentNode.appendChild(imgMax);
});

img.addEventListener('mouseleave', (e) => {
    e.target.nextElementSibling.remove();
});

img.addEventListener('mousemove', (e) => {
    let x = e.offsetX * 100 / img.offsetWidth;
    let y = e.offsetY * 100 / img.offsetHeight;
    e.target.nextElementSibling.style.backgroundPosition = x + '% ' + y + '%';
});