const openBtn = document.querySelector(".open_btn");
const closeBtn = document.querySelector(".close_btn");
const modelContent = document.querySelector(".content_sec");
const main = document.querySelector(".color");



openBtn.addEventListener("click", (event) => {
    modelContent.classList.add("content_visible");
    main.classList.add("color_blue");
});

closeBtn.addEventListener("click", (event) => {
    modelContent.classList.remove("content_visible");
    main.classList.remove("color_blue");
});