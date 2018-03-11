$(function() {
    $('body').vegas({
        delay: 7000,
        timer: false,
        shuffle: true,
        firstTransition: 'fade',
        firstTransitionDuration: 5000,
        transitionDuration: 2000,
        slides: [
            { src: '/src/assets/sunset.jpg' },
            { src: '/src/assets/beach.jpg' },
            { src: '/src/assets/sea.jpg' }
        ]
    });
});