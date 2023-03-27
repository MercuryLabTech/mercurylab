import barba from '@barba/core'

// modules
import * as functions from "./modules/functions.js"
import * as telegramSend from "./modules/telegramSend.js"
import * as scroll from "./modules/scroll.js"
import * as animation from "./modules/animations.js"
import * as accordion from "./modules/accordion.js"

// components
import * as footer from "./components/footer.js"
import * as popup from "./components/popup.js"
import * as reviews from "./components/reviews.js"
import * as menu from "./components/menu.js"

function delay(n) {
    n = n || 2000
    return new Promise(done => {
        setTimeout(() => {
            done()
        }, n)
    })
}

barba.init({
    sync: true,
    views: [
        {
            namespace: 'home',
            beforeEnter() {
                reviews.init()
                accordion.init()
            },
            afterEnter() {
                menu.init()
            }
        },
        {
            namespace: 'works',
            beforeEnter() {
            },
            afterEnter() {
                menu.init()
            }
        },
    ],
    transitions: [{
        async leave(data) {
            const done = this.async()
            document.querySelector('.transition li').classList.add('leave')
            await delay(1200)
            done()
        },
        async enter(data) {
            const done = this.async()
            document.querySelector('.transition li').classList.remove('leave')
            document.querySelector('.transition li').classList.add('enter')
            done()
            await delay(1000)
            document.querySelector('.transition li').classList.remove('enter')
        },
        async once(data){
            reviews.init()
            functions.isWebp()
            scroll.init()
            animation.init()
            telegramSend.init()
            footer.init()
            popup.init()
            menu.init()
        },
    }]
})

