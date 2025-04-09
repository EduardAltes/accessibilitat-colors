document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let index = 0;
        const figures = carousel.querySelectorAll(".carousel-container figure");
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");

        function updateCarousel() {
            figures.forEach((figure, i) => {
                figure.style.display = i === index ? "block" : "none";
                const caption = figure.querySelector("figcaption");
                if (caption) {
                    caption.style.display = i === index ? "block" : "none";
                }
            });
        }

        prevButton.addEventListener("click", function () {
            index = (index > 0) ? index - 1 : figures.length - 1;
            updateCarousel();
        });

        nextButton.addEventListener("click", function () {
            index = (index < figures.length - 1) ? index + 1 : 0;
            updateCarousel();
        });

        carousel.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") {
                prevButton.click();
            } else if (event.key === "ArrowRight") {
                nextButton.click();
            }
        });

        updateCarousel();
    });
});
