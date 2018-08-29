// Main
console.log('FullStack Vietnam!')
$('.home-slider .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        }
    }
})