document.addEventListener('DOMContentLoaded', function() {
    const homeBookBtn = document.getElementById('home-book-btn');
    if (homeBookBtn) {
        homeBookBtn.addEventListener('click', function() {
            alert("Thank you for your interest! We will get back to you shortly.");
            this.textContent = "Request Sent!";
            this.style.backgroundColor = "#28a745";
        });
    }

    const callNowBtn = document.getElementById('call-now-btn');
    if (callNowBtn) {
        callNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const footer = document.querySelector('footer');
            if (footer) {
                footer.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameEl = contactForm.querySelector('[name="name"]');
            const emailEl = contactForm.querySelector('[name="email"]');
            const messageEl = contactForm.querySelector('[name="message"]');
            if (!nameEl || !emailEl || !messageEl) return;
            const name = nameEl.value.trim();
            const email = emailEl.value.trim();
            const message = messageEl.value.trim();
            if (name === "" || email === "" || message === "") {
                alert("Oops! Please fill in all fields before sending.");
            } else if (!email.includes("@")) {
                alert("Please enter a valid email address.");
            } else {
                alert("Success! Thank you, " + name + ". Your message has been sent.");
                contactForm.reset();
            }
        });
    }

    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('navLinks');
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});