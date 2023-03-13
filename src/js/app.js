import barba from '@barba/core';

// modules
import * as functions from "./modules/functions.js";

// components
import * as footer from "./components/footer.js";

// modules
functions.isWebp();

// components
footer.init();


barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();
            // pageTransition();
            // setMenuLinks();
            // await delay(1500);
            done();
        },
        async enter(data) {

        },
        async once(data) {

        },
    }]
})
