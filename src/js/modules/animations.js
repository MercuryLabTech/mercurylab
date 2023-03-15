import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText.js";

export function init() {
    const char = new SplitText(".btn-anim__p", { type: "words,chars" })
    gsap.utils.toArray(".btn-anim").forEach(el => {
        let t = el;
        const anim = gsap.to(el.querySelectorAll(".btn-anim__p div div"), {
            yPercent: -100,
            duration: 0.6,
            stagger: 0.015,
            ease: "power4",
        })
        anim.pause()
        el.addEventListener('mouseenter', () => {   
            t = el;
            anim.play()
        })
        el.addEventListener('mouseleave', () => {
            t = el;
            anim.reverse()
        })
    })
}