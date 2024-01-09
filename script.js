// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const anchor of smoothScrollLinks) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    }

    
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    menuButton.addEventListener("click", function () {
        mobileNav.classList.toggle("hidden");
    });
});


