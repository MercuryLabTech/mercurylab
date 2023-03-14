import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
    multiplier: 0.5,
    smartphone: {
        smooth: true
    },
});