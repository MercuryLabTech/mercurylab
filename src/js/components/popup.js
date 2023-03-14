export function init() {
    const popup = document.querySelectorAll('.popup');
    const close = document.querySelectorAll('.popup-close');
    close.forEach(el => {
        el.addEventListener('click', () => {
            popup.forEach(el => {
                el.classList.remove('active')
            })
        })
    })
}