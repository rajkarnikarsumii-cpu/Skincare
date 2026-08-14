// ==========================
// REVEAL ANIMATION
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            item.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach((counter) => {
    counterObserver.observe(counter);
});


// ==========================
// FLOATING MOUSE GLOW
// ==========================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// ==========================
// PARALLAX GLOWS
// ==========================

const glowA = document.querySelector(".glow-a");
const glowB = document.querySelector(".glow-b");
const glowC = document.querySelector(".glow-c");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    if (glowA) {
        glowA.style.transform =
            `translate(${x * 20}px, ${y * 20}px)`;
    }

    if (glowB) {
        glowB.style.transform =
            `translate(${-x * 25}px, ${-y * 25}px)`;
    }

    if (glowC) {
        glowC.style.transform =
            `translate(${x * 15}px, ${-y * 15}px)`;
    }

});


// ==========================
// FLOATING STARS RANDOM
// ==========================

const stars = document.querySelectorAll(".lux-star");

stars.forEach((star, index) => {

    setInterval(() => {

        star.style.opacity =
            Math.random() * 0.6 + 0.4;

        star.style.transform =
            `translateY(${Math.random() * -10}px)`;

    }, 1000 + (index * 300));

});


// ==========================
// CTA BUTTON MAGNET EFFECT
// ==========================

const ctaBtn = document.querySelector(".cta-btn");

if (ctaBtn) {

    ctaBtn.addEventListener("mousemove", (e) => {

        const rect = ctaBtn.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        ctaBtn.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });

    ctaBtn.addEventListener("mouseleave", () => {

        ctaBtn.style.transform = "translate(0,0)";

    });


    const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

}