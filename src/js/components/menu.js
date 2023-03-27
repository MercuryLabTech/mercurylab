export function init() {
    setTimeout(() => {
        const links = document.querySelectorAll('[data-link]');
        const wrapper = document.querySelector('[data-barba-namespace]').getAttribute('data-barba-namespace');
        links.forEach(el => {
            el.classList.remove('active')
            el.setAttribute('href', el.getAttribute('data-href'))
            if(el.getAttribute('data-link') === wrapper) {
                el.setAttribute('href', '#')
                el.classList.add('active')
            }
        })
    }, 1);
}