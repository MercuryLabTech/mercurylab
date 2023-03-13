export function init() {
    const input = document.querySelectorAll(".footer-input")

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
}