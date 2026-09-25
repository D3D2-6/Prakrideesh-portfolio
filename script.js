/* =====================================================
   PRakrideesh P PORTFOLIO
===================================================== */


/* ================= CURSOR ================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.transform =
        `translate(${mouseX}px, ${mouseY}px)`;

});


function animateCursor() {

    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    follower.style.transform =
        `translate(${followerX - 14}px, ${followerY - 14}px)`;

    requestAnimationFrame(animateCursor);

}

animateCursor();


/* ================= CURSOR HOVER ================= */

const hoverElements =
    document.querySelectorAll("a, button");


hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        follower.style.width = "55px";
        follower.style.height = "55px";

    });


    element.addEventListener("mouseleave", () => {

        follower.style.width = "35px";
        follower.style.height = "35px";

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".project, .skill, .process-item, .about-content, .category-item"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(element);

});


/* ================= PARALLAX ================= */

window.addEventListener("scroll", () => {

    const scrolled = window.scrollY;

    const orbOne =
        document.querySelector(".orb-one");

    const orbTwo =
        document.querySelector(".orb-two");


    if (orbOne) {

        orbOne.style.transform =
            `translateY(${scrolled * 0.12}px)`;

    }


    if (orbTwo) {

        orbTwo.style.transform =
            `translateY(${scrolled * -0.08}px)`;

    }

});


/* ================= SMOOTH NAVIGATION ================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ================= CURRENT YEAR ================= */

const year =
    document.querySelector("footer");

if (year) {

    year.innerHTML =
        year.innerHTML.replace(
            "2026",
            new Date().getFullYear()
        );

}xx
