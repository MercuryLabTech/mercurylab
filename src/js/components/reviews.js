import Swiper from "swiper";

export function init() {
    console.log('reviews init');
    var swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        speed: 600,
    });
}