document.addEventListener("DOMContentLoaded", () => {
    const players = [
        { name: "Player 1", position: "Quarterback" },
        { name: "Player 2", position: "Running Back" },
        { name: "Player 3", position: "Wide Receiver" }
    ];

    const playerList = document.getElementById("player-list");
    players.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.textContent = `${player.name} - ${player.position}`;
        playerList.appendChild(playerDiv);
    });
});
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // Existing player list code...
    
    // GSAP Initial Animations
    gsap.from("header", { duration: 1.5, y: -100, opacity: 0, ease: "bounce" });
    gsap.from("#about h2", { duration: 1, x: -200, opacity: 0, delay: 0.5 });
    gsap.from("#about p", { duration: 1, x: 200, opacity: 0, delay: 1 });

    gsap.from("#schedule h2", { duration: 1, scale: 0.5, opacity: 0, delay: 1.5 });
    gsap.from("#schedule p", { duration: 1, scale: 0.5, opacity: 0, delay: 2 });

    gsap.from("#players h2", { duration: 1, rotation: 360, opacity: 0, delay: 2.5 });
    gsap.from("#player-list div", { duration: 1, y: 50, opacity: 0, stagger: 0.2, delay: 3 });
    gsap.from(".logo", { duration: 1, scale: 0, ease: "back.out(1.7)" });


    // Register ScrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-Based Animations
    gsap.from("#about", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%", // When the top of #about is 80% from the top of the viewport
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from("#schedule", {
        scrollTrigger: {
            trigger: "#schedule",
            start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from("#players", {
        scrollTrigger: {
            trigger: "#players",
            start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // GSAP Hover Animations for Player Cards
    const playerCards = document.querySelectorAll(".player-card");

    playerCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.3)", duration: 0.3 });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, boxShadow: "0 2px 5px rgba(0,0,0,0.1)", duration: 0.3 });
        });
    });
});

gsap.from(".achievement-container", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#achievements",
        start: "top 80%", // Animation starts when the section is near the viewport
        toggleActions: "play none none reverse",
    }
});


