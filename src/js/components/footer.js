export function init() {
    const input = document.querySelectorAll(".footer-input")
    const curr = document.querySelectorAll('.currencies-btn') 
    const price = document.querySelector('.footer-price')

    input.forEach(el => {
        el.addEventListener("change", () => {
            const value = el.value;
            if(value === ""){
                el.classList.remove("active");
            } else {
                el.classList.add("active");
            }
        })
    })

    curr.forEach(el => {
        el.addEventListener('change', () => {
            const value = el.getAttribute('data-text');
            price.value = value;
        })
    })
}