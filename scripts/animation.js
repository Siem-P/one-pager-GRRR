gsap.registerPlugin(ScrollTrigger);


// Company name - Landing Page
gsap.to(".company-name", {
    top: 56,
    ease: Power3.easeOut,
    duration: 2
});

// 
// gsap.to(".company-name", {
//     scrollTrigger: {
//         trigger: ".advertisement-section",
//         markers: true,
//         start: "top 10%",
//         end: "bottom 100%",
//         scrub: true,
//     },
//     color: "var(--neon-green)",
//     backgroundColor: "var(--black)",
//     duration: 1
    
// })

// Five-Zero's
gsap.to(".five-zero-section > span", {
    scrollTrigger: {
        trigger: ".five-zero-section",
        start: "top 70%",
        // end: "bottom 90%",
        // markers: true,
        // scrub: true,
        toggleActions: "play none none pause"
    },
    stagger: 0.2,
    x: 0,
    duration: 0.7,
    ease: Circ.easeOut
});