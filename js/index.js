let spin = document.querySelector(".side-bar .spin");
let pages = document.querySelectorAll(".side-bar ul li");

pages.forEach((page) => {
    page.addEventListener("click", () => {
        RemoveActive(pages);
        page.classList.add("active");
    });
});

spin.addEventListener("click", () => {
    document.querySelector(".side-bar .spin i").classList.toggle("fa-spin");
    document.querySelector(".side-bar").classList.toggle("open");
});

function RemoveActive (elements) {
    elements.forEach(el => {
        el.classList.remove("active");
    });
}