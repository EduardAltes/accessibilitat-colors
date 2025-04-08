document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let index = 0;
        const images = carousel.querySelectorAll(".carousel-container img");
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");

        function updateCarousel() {
            images.forEach((img, i) => {
                img.style.display = i === index ? "block" : "none";
            });
        }

        prevButton.addEventListener("click", function () {
            index = (index > 0) ? index - 1 : images.length - 1;
            updateCarousel();
        });

        nextButton.addEventListener("click", function () {
            index = (index < images.length - 1) ? index + 1 : 0;
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
