import barba from '@barba/core';

import * as functions from "./modules/functions.js";

functions.isWebp();

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
