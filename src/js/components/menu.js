export function init() {
    if(document.querySelector('.header')){
        let scrollBefore = 0;
        const header = document.querySelector('.header');
        header.classList.remove('hide')
        window.addEventListener('scroll', (e) => {
            const scrolled = window.scrollY;
            if(scrollBefore > scrolled){
                if(header.classList.contains('hide')){
                    header.classList.remove('hide')
                }
                scrollBefore = scrolled;
            }else{
                scrollBefore = scrolled;
                if(!header.classList.contains('hide')){
                    header.classList.add('hide')
                }
            }
        })
    }
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