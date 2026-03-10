document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".services-intro");
    const numbers = document.querySelectorAll(".services-intro__stat-value");

    let animating = false;

    function animateNumbers() {

        animating = true;

        numbers.forEach(num => {

            const target = +num.dataset.target;
            let current = 0;

            const step = target / 80;

            function update() {

                current += step;

                if (current < target) {
                    num.textContent = Math.floor(current) + "%";
                    requestAnimationFrame(update);
                } else {
                    num.textContent = target + "%";
                }

            }

            update();

        });

    }

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !animating) {

                numbers.forEach(num => num.textContent = "0%");
                animateNumbers();

            }

            if (!entry.isIntersecting) {
                animating = false;
            }

        });

    }, { threshold: 0.6 });

    observer.observe(section);

});