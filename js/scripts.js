$(document).ready(function() {

    var backgroundImages = ['slider-1.jpg', 'slider-1a.jpg', 'slider-2.jpg', 'slider-3.jpg', 'slider-4.jpg'];
    var imagesPath = '../Sundaram/images/';
    var path = "";
    var nextImage = 0;

    function loadBackgroundImages() {
        if (nextImage == backgroundImages.length) {
            nextImage = 0;
        }
        path = imagesPath + backgroundImages[nextImage];

        nextImage++;
        $('.main-header').css('background-image', 'url("' + path + '")');
        $('.main-header').css('transition', 'background-image ease-in 2s');

    }
    setInterval(loadBackgroundImages, 3000);

   
});
