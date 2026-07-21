/* ==========================================
   AI PORTFOLIO JAVASCRIPT
==========================================*/

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});

// ==========================================
// AOS Animation
// ==========================================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ==========================================
// Typed JS
// ==========================================

new Typed("#typing", {

    strings: [

        "Software Developer",

        "Python Developer",

        "Frontend Web Developer",

        "Data Analytics Enthusiast"

    ],

    typeSpeed: 60,

    backSpeed: 40,

    backDelay: 1500,

    loop: true

});

// ==========================================
// Scroll Progress Bar
// ==========================================

window.addEventListener("scroll", () => {

    const winScroll =
        document.body.scrollTop ||
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        scrolled + "%";

});

// ==========================================
// Counter Animation
// ==========================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText =
                Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        }

        else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ==========================================
// Back To Top Button
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// Dark Mode
// ==========================================

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

// ==========================================
// Mobile Menu
// ==========================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Close menu after click

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

// ==========================================
// Skill Bar Animation
// ==========================================

const skillBars = document.querySelectorAll(".progress-bar");

const animateSkills = () => {

    skillBars.forEach(bar => {

        const width = bar.textContent;

        bar.style.width = width;

    });

};

const skillSection = document.querySelector("#skills");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateSkills();

        }

    });

});

observer.observe(skillSection);

// ==========================================
// Active Navbar Link
// ==========================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// Profile Image Tilt Effect
// ==========================================

const profile = document.querySelector(".profile-img");

profile.addEventListener("mousemove", () => {

    profile.style.transform = "scale(1.05) rotate(2deg)";

});

profile.addEventListener("mouseleave", () => {

    profile.style.transform = "scale(1) rotate(0deg)";

});

// ==========================================
// Console Welcome
// ==========================================

console.log(
    "%cWelcome to Shaik Ahmad Sadhikh Portfolio 🚀",
    "color:#00e5ff;font-size:18px;font-weight:bold;"
);
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});