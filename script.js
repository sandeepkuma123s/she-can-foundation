// Join Us Button

document.getElementById("joinBtn").addEventListener("click", () => {
alert("Thank you for supporting She Can Foundation!");
});

// Volunteer Button

document.getElementById("volunteerBtn").addEventListener("click", () => {
alert("Thank you for your interest in volunteering!");
});

// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
".about, .impact, .card, .volunteer"
);

function revealOnScroll() {

```
revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;

    const elementTop =
        element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    }
});
```

}

window.addEventListener("scroll", revealOnScroll);

revealElements.forEach((element) => {

```
element.style.opacity = "0";

element.style.transform =
    "translateY(40px)";

element.style.transition =
    "all 0.8s ease";
```

});

revealOnScroll();

// Smooth Navbar Active Link

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

```
link.addEventListener("click", () => {

    navLinks.forEach(item =>
        item.classList.remove("active")
    );

    link.classList.add("active");
});
```

});
