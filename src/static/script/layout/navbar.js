function updateDisplay() {
    const element = document.getElementById("nav-brand")

    if (window.innerWidth < 992) {
        if (element) {
            element.style.display = "none"
        }
    } else {
        if (element) {
            element.style.display = "inline-block"
        }
    }
}

export default updateDisplay