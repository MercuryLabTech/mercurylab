import barba from '@barba/core';
import gsap from 'gsap';
import $ from 'jquery';

// modules
import * as functions from "./modules/functions.js";
import * as telegramSend from "./modules/telegramSend.js";
import * as scroll from "./modules/scroll.js";
import * as animation from "./modules/animations.js";

// components
import * as footer from "./components/footer.js";
import * as popup from "./components/popup.js";
import * as reviews from "./components/reviews.js"

// modules
functions.isWebp();
scroll.init();
animation.init();
telegramSend.init();

// components
footer.init();
popup.init();
reviews.init();

$(document).ready(function() {
    $(".accordion > .accordion__button").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".accordion__content")
          .slideUp(200);
      } else {
        $(".accordion > .accordion__button").removeClass("active");
        $(this).addClass("active");
        $(".accordion__content").slideUp(200);
        $(this)
          .siblings(".accordion__content")
          .slideDown(200);
      }
    });
});

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
            document.querySelector('.transition li').classList.add('leave');
            await delay(1200);
            done();
        },
        async enter(data) {
            const done = this.async();
            document.querySelector('.transition li').classList.remove('leave');
            document.querySelector('.transition li').classList.add('enter');
            done();
            await delay(1000);
            document.querySelector('.transition li').classList.remove('enter');
        },
        async once(data) {
            // gsap.to('.transition li', {duration: 1, clip: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"})
        },
    }]
})

