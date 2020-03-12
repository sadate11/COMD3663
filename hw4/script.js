let slideIndex = 1;

function addSlideDivs(n) {
    showSlideDivs((slideIndex += n));
}

function showSlideDivs(n) {
    let i;
    let slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

leftBtn.addEventListener("click", () => {
    addSlideDivs(-1);
});

rightBtn.addEventListener("click", () => {
    addSlideDivs(1);
});