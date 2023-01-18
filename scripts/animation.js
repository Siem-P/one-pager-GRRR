gsap.registerPlugin(ScrollTrigger);


// Company name - Landing Page
gsap.to(".company-name", {
    top: 56,
    ease: Power3.easeOut,
    
    duration: 2
});

// H1
// gsap.to(".hero-intro h1", {

// })

// Five-Zero's
gsap.to(".advertisement-section > span", {
    scrollTrigger: {
        trigger: ".advertisement-section",
        start: "top 70%",
        // end: "bottom 90%",
        // markers: true,
        // scrub: true,
        toggleActions: "play none none reset"
    },
    stagger: 0.3,
    x: 0,
    duration: 1,
    ease: Circ.easeOut
});