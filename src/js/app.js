import barba from '@barba/core';
import gsap from 'gsap';

// modules
import * as functions from "./modules/functions.js";
import * as telegramSend from "./modules/telegramSend.js";
import * as scroll from "./modules/scroll.js";
import * as animation from "./modules/animations.js";

// components
import * as footer from "./components/footer.js";
import * as popup from "./components/popup.js";

// modules
functions.isWebp();
scroll.init();
animation.init();
telegramSend.init();

// components
footer.init();
popup.init();

function pageTransition() {
    var tl = gsap.timeline();
    tl.to('.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    tl.to('.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1200);
            done();
        },
        async enter(data) {

        },
        async once(data) {

        },
    }]
})
