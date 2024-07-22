const btn = document.querySelectorAll(".btn");
const model = document.querySelector(".modal")
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".header span")

btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        openModal();
    })
})

function openModal(){
    model.classList.add("active")
    overlay.classList.add("active")
}

close.addEventListener("click", () => {
    model.classList.remove("active");
    overlay.classList.remove("active")
})

overlay.addEventListener("click", () => {
    model.classList.remove("active");
    overlay.classList.remove("active")
})