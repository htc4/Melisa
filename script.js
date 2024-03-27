window.addEventListener('load', function () {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
    const bottle = document.querySelector('.bottle');
    bottle.addEventListener('mouseover', function () {
        this.style.transform = 'rotate(10deg)';
    });
    bottle.addEventListener('mouseout', function () {
        this.style.transform = 'rotate(0deg)';
    });
});