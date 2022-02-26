const linksSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener('click', () => { //Toggle Nav
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => { //Animate Links
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /3}s`;
            }
        });

        burger.classList.toggle("rotate-burger");
    });



}

(function() {
    const bideo = new Bideo();
    bideo.init({
        videoEl: document.querySelector("#background-video"),
        container: document.querySelector("body"),
        resize: true,
        autoplay: true,
        isMobile: window.matchMedia("(max-width: 768px)").matches,
        playButton: document.getElementById("play"),
        pauseButton: document.getElementById("pause"),
        src: [{
            src: "SpaceLoop.mp4",
            type: "video/mp4",
        }, ],
        onLoad: function() {
            document.querySelector("#video-cover").style.display = "none";
        }
    });
}());

(function() {
    const typed1 = new Typed('.type1', {
        strings: ["^1000I'm Dimitris"],
        typeSpeed: 60,
        backSpeed: 30,
        showCursor: true,
        onComplete: function(self) {
            self.cursor.remove()
        }
    });

    const typed2 = new Typed('.type2', {
        strings: ["^2000trying to become a web developer without a caffeine addiction :)"],
        typeSpeed: 50,
        backSpeed: 30,
        showCursor: true,
        onComplete: function(self) {
            self.cursor.remove()
        }
    });

})();

linksSlide();