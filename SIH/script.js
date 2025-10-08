var nextContent = document.getElementsByClassName("nextAnimationContent");
var elements = document.querySelectorAll("#overflow h4, #nright button");
var elem = document.querySelectorAll("#hleft h1, #hleft p, #hleft button");


function animateText() {
    var tl = gsap.timeline({ repeat: -1 });

    gsap.to("#nleft img", {
        repeat: -1,
        rotate: "360deg",
        duration: 7,
        ease: "linear",
        transformOrigin: "center",
        yoyo: true,
    });

    tl.to("#nleft h2", {
        delay: 6,
        duration: 2,

        x: -500,
        ease: "none",
    })

        .to("#nleft h2", {
            duration: 1,
            delay: 1,
            x: 0,
            opacity: 1,
            ease: "none",
        })

        .to("#nleft h2", {
            duration: 2,
            delay: 4,
            x: 500,
            ease: "none",
        })

        .to("#nleft h2", {
            delay: 1,
            duration: 1,
            x: 0,
            opacity: 1,
            ease: "none",
        });
}

async function ImageAnimation() {
    function getRandomDelay() {
        return Math.random() * 3;
    }

    function getRandomRotation() {
        return Math.random() * 360;
    }

    function getRandomScale() {
        return 0.5 + Math.random();
    }

    gsap.to("#Star", {
        duration: 4,
        rotation: getRandomRotation(),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: getRandomDelay(),
    });

    gsap.to(".Star", {
        duration: 4,
        rotation: -getRandomRotation(),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#Play", {
        duration: 2.6 + Math.random(),
        x: 40,
        rotate: `${80 + Math.random() * 20}deg`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#Location", {
        duration: 2.5 + Math.random(),
        x: 40,
        y: 15,
        rotate: `${40 + Math.random() * 20}deg`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: getRandomDelay(),
    });

    gsap.to(".greenCircle", {
        duration: 4,
        x: 60,
        y: 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#Share", {
        duration: 2.7 + Math.random(),
        x: 30,
        y: -15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#greenCircle", {
        duration: 1,
        scale: getRandomScale(),
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#BlackCircle", {
        duration: 1,
        scale: getRandomScale(),
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        delay: getRandomDelay(),
    });

    gsap.to("#Like", {
        duration: 2 + Math.random(),
        x: 20,
        y: -10,
        rotate: `${-30 + Math.random() * 20}deg`,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: getRandomDelay(),
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to("#Megaphone", {
        rotate: "-14deg",
        duration: 0.6,
        ease: "power2.inOut",
    })

        .to("#Megaphone", {
            scale: 1.05,
            duration: 0.1,
            yoyo: true,
            repeat: 5,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            rotate: "14deg",
            duration: 0.6,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            scale: 1.05,
            duration: 0.1,
            yoyo: true,
            repeat: 5,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            rotate: "0deg",
            duration: 0.6,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            scale: 1.05,
            duration: 0.1,
            yoyo: true,
            repeat: 5,
            ease: "power2.inOut",
        })

        .to("#Megaphone", {
            rotate: "0deg",
            duration: 0.6,
            ease: "power2.inOut",
        });

    gsap.to(".Ring1", {
        x: 50,
        y: -30,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
    });

    gsap.to(".Ring2", {
        x: 30,
        y: -50,
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
    });

    gsap.to(".Ring3", {
        x: 70,
        y: -20,
        duration: 1.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
    });
}


function InfinityScrollAnimation(){

    var marquee = document.querySelector(".marque");
    window.addEventListener("wheel", function (det) {
        if (det.deltaY > 0) {
            gsap.to(".marque img", {
                rotate: 0,
                duration: 0.5,
            });
        } else {
            gsap.to(".marque img", {
                rotate: 180,
                duration: 0.5,
            });
        }
    });

}


function Page2Animation(){

    gsap.from("#move", {
        duration: 1.2,
        opacity: 0,
        scale: 0,
        y: 20,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 60%",
            end: "top 10%",
        }
    })

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 40%",
            end: "top 0%",
            scrub: 3,
        }
    })

    tl2.from("#sleft", {
        duration: 1,
        opacity: 0,
        x: -200,
        ease: "power3.out",
    }, "anim1")

    tl2.from("#sright", {
        duration: 1,
        opacity: 0,
        x: 200,
        ease: "power3.out",
    }, "anim1")

    tl2.from(".scleft", {
        duration: 1,
        opacity: 0,
        x: -500,
        ease: "power3.out",
    }, "anim2")

    tl2.from(".scright", {
        duration: 1,
        opacity: 0,
        x: 500,
        ease: "power3.out",
    }, "anim2")

}


function CursorAnimation(){

    const numParticles = 50;
    const particleContainer = document.getElementById('particle-container');
    const particles = [];


    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.opacity = 0;  
        particles.push(particle);
        particleContainer.appendChild(particle);
    }

    window.addEventListener("mousemove", (event) => {
        particles.forEach((particle, index) => {
            const delay = index * 0.0015; 

            gsap.to(particle, {
                x: event.clientX - particle.clientWidth / 2, 
                y: event.clientY - particle.clientHeight / 2, 
                duration: 0.2,
                opacity: 1, 
                ease: "power3.out",
                delay: delay, 
            });

            
            gsap.to(particle, {
                opacity: 0,
                delay: delay, 
                duration: 0.7,
            });
        });
    });
}


function StringAnimation(){

    var initialPath = `M 10 50 Q 600 50 1100 50`;
    var Path = `M 10 50 Q 600 50 1100 50`;

    var string1 = document.querySelector("#string1")
    var string2 = document.querySelector("#string2")
    var string3 = document.querySelector("#string3")
    var string4 = document.querySelector("#string4")
    var string5 = document.querySelector("#string5")
    var string6 = document.querySelector("#string6")


    string1.addEventListener("mousemove", function (dets) {
        var svgElement = string1.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str1 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string1.addEventListener("mouseleave", function () {
        gsap.to("#str1 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });

    string2.addEventListener("mousemove", function (dets) {
        var svgElement = string2.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str2 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string2.addEventListener("mouseleave", function () {
        gsap.to("#str2 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });


    string3.addEventListener("mousemove", function (dets) {
        var svgElement = string3.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str3 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string3.addEventListener("mouseleave", function () {
        gsap.to("#str3 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });

    string4.addEventListener("mousemove", function (dets) {
        var svgElement = string4.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str4 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string4.addEventListener("mouseleave", function () {
        gsap.to("#str4 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });

    string5.addEventListener("mousemove", function (dets) {
        var svgElement = string5.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str5 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string5.addEventListener("mouseleave", function () {
        gsap.to("#str5 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });

    string6.addEventListener("mousemove", function (dets) {
        var svgElement = string6.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;
        
        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
        
        gsap.to("#str6 path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    string6.addEventListener("mouseleave", function () {
        gsap.to("#str6 path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });
}


function WorkingProcessAnimation(){

    var elements = [
        { wp: document.querySelector(".wp1"), wpi: document.querySelector(".wpi1"), inf: document.querySelector(".inf1"), pth: document.querySelector("#str1") },
        { wp: document.querySelector(".wp2"), wpi: document.querySelector(".wpi2"), inf: document.querySelector(".inf2"), pth: document.querySelector("#str2") },
        { wp: document.querySelector(".wp3"), wpi: document.querySelector(".wpi3"), inf: document.querySelector(".inf3"), pth: document.querySelector("#str3") },
        { wp: document.querySelector(".wp4"), wpi: document.querySelector(".wpi4"), inf: document.querySelector(".inf4"), pth: document.querySelector("#str4") },
        { wp: document.querySelector(".wp5"), wpi: document.querySelector(".wpi5"), inf: document.querySelector(".inf5"), pth: document.querySelector("#str5") },
        { wp: document.querySelector(".wp6"), wpi: document.querySelector(".wpi6"), inf: document.querySelector(".inf6"), pth: document.querySelector("#str6") }
    ];


    elements.forEach(function(item) {
        var wp = item.wp;
        var wpi = item.wpi;
        var inf = item.inf;
        var pth = item.pth;

        wp.addEventListener("click", function() {
            wp.classList.toggle("open");
            pth.classList.toggle("hidden");
            inf.classList.toggle("hidden");
            wpi.classList.toggle("imgopen");

            if (wpi.classList.contains("imgopen")) {
                wpi.innerHTML = `<img src="-.svg" alt="">`;
            } else {
                wpi.innerHTML = `<img src="+.svg" alt="">`;
            }
        });
    });

}


function FAQAnimation(){
    var elements = [
        { faq: document.querySelector(".faq1"), faqIcon: document.querySelector(".faqIcon1"), ans: document.querySelector(".faqAns1"), pth: document.querySelector("#faqStr1") },
        { faq: document.querySelector(".faq2"), faqIcon: document.querySelector(".faqIcon2"), ans: document.querySelector(".faqAns2"), pth: document.querySelector("#faqStr2") },
        { faq: document.querySelector(".faq3"), faqIcon: document.querySelector(".faqIcon3"), ans: document.querySelector(".faqAns3"), pth: document.querySelector("#faqStr3") },
        { faq: document.querySelector(".faq4"), faqIcon: document.querySelector(".faqIcon4"), ans: document.querySelector(".faqAns4"), pth: document.querySelector("#faqStr4") },
        { faq: document.querySelector(".faq5"), faqIcon: document.querySelector(".faqIcon5"), ans: document.querySelector(".faqAns5"), pth: document.querySelector("#faqStr5") },
        { faq: document.querySelector(".faq6"), faqIcon: document.querySelector(".faqIcon6"), ans: document.querySelector(".faqAns6"), pth: document.querySelector("#faqStr6") }
    ];

    elements.forEach(function(item) {
        var faq = item.faq;
        var faqIcon = item.faqIcon;
        var ans = item.ans;
        var pth = item.pth;

        faq.addEventListener("click", function() {
            faq.classList.toggle("open");
            pth.classList.toggle("hidden");
            ans.classList.toggle("hidden");
            faqIcon.classList.toggle("imgopen");

            if (faqIcon.classList.contains("imgopen")) {
                faqIcon.innerHTML = `<img src="./assets/-.svg" alt="">`;
            } else {
                faqIcon.innerHTML = `<img src="./assets/+.svg" alt="">`;
            }
        });
    });
}


function FAQStringAnimation(){
    var initialPath = `M 10 50 Q 600 50 1100 50`;
    var Path = `M 10 50 Q 600 50 1100 50`;

    var faqStrings = [
        document.querySelector("#faqString1"),
        document.querySelector("#faqString2"),
        document.querySelector("#faqString3"),
        document.querySelector("#faqString4"),
        document.querySelector("#faqString5"),
        document.querySelector("#faqString6")
    ];

    faqStrings.forEach(function(faqString, index) {
        var strId = `#faqStr${index + 1}`;
        
        faqString.addEventListener("mousemove", function (dets) {
            var svgElement = faqString.querySelector("svg");
            var boundingBox = svgElement.getBoundingClientRect();
            var relativeX = dets.clientX - boundingBox.left;
            var relativeY = dets.clientY - boundingBox.top;
            
            initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;
            
            gsap.to(`${strId} path`, {
                attr: { d: initialPath },
                duration: 0.2,
                ease: "power3.out",
            });
        });

        faqString.addEventListener("mouseleave", function () {
            gsap.to(`${strId} path`, {
                attr: { d: Path },
                duration: 1.3,
                ease: "elastic.out(1, 0.1)",
            });
        });
    });
}


function Page4BAnimation(){
    var tl4b = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4B",
            scroller: "body",
            start: "top 70%",
            end: "top 20%",
            scrub: 2,
        }
    })

    tl4b.from("#faqLeft", {
        duration: 2,
        opacity: 0,
        x: -200,
        ease: "power3.inout",
    }, "faqAn1")

    tl4b.from("#faqRight", {
        duration: 2,
        opacity: 0,
        x: 200,
        ease: "power3.inout",
    }, "faqAn1")

    tl4b.from("#faqProcess", {
        duration: 2,
        opacity: 0,
        y: 100,
        ease: "power5.out",
    }, "faqAn1")
}


function Page3Animation(){

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "top 70%",
            end: "top 20%",
            scrub: 2,
        }
    })

    tl3.from("#wleft", {
        duration: 2,
        opacity: 0,
        x: -200,
        ease: "power3.inout",
    }, "an1")

    tl3.from("#wright", {
        duration: 2,
        opacity: 0,
        x: 200,
        ease: "power3.inout",
    }, "an1")

    tl3.from("#workProcess", {
        duration: 2,
        opacity: 0,
        y: 100,
        ease: "power5.out",
    }, "an1")
}


function Page4Animation(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 60%",
            end: "top 20%",
            scrub: 2,
        }
    })

    tl4.from("#tleft", {
        duration: 1,
        opacity: 0,
        x: -200,
        ease: "power3.out",
    }, "anim3")

    tl4.from("#tright", {
        duration: 1,
        opacity: 0,
        x: 200,
        ease: "power3.out",
    }, "anim3")

    tl4.from("#Tcontainer", {
        duration: 4,
        scale: 0,
        opacity: 0,
        y: -30,
        ease: "power3.out",
    })

    tl4.from(".T-Card", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power3.out",
        stagger: 0.8,
    })
}


function Page6Animation(){

    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page6",
            scroller: "body",
            start: "top 60%",
            end: "top 20%",
            scrub: 2,
        }
    })

    tl6.from("#Cleft", {
        duration: 1,
        opacity: 0,
        x: -200,
        ease: "power3.out",
    }, "anim4")

    tl6.from("#Cright", {
        duration: 1,
        opacity: 0,
        x: 200,
        ease: "power3.out",
    }, "anim4")

    tl6.from("#Ccontainer", {
        duration: 3,
        scale: 0,
        opacity: 0,
        y: -30,
        ease: "power3.out",
    })

    tl6.from("#CFRM", {
        duration: 2,
        opacity: 0,
        X: -500,
        ease: "power5.out",
        stagger: 0.7,
    })

    tl6.from("#CFRMIMG", {
        duration: 2,
        opacity: 0,
        X: 500,
        ease: "power5.out",
        stagger: 0.8,
    })

    gsap.to(".SunVector", {
        duration: 12,
        rotation: 360,
        ease: "linear",
        repeat: -1,
    })

    gsap.to(".BlStr", {
        duration: 3,
        rotation: 1000,
        ease: "elastic.inout(0.5)",
        yoyo: 1,
        repeat: -1
    })

    gsap.to(".GrStr", {
        duration: 9,
        rotation: -360,
        ease: "linear",
        repeat: -1,
        yoyo: true,
    })

}


function FooterAnimation(){
    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page6",
            scroller: "body",
            start: "top -50%",
            end: "top -70%",
            scrub: 2,
        }
    })

    gsap.to("#Fleft img", {
        duration: 4,
        rotate: 360,
        repeat: -1,
        ease: "none",
    })

    tl7.from("#Footer", {
        duration: 1,
        opacity: 0,
        y: 200,
        ease: "power3.out",
    })

    tl7.from("#Fnav", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "elastic.out(0.1)",
    })

    tl7.from("#Fcont", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power3.out",
    })
    
    tl7.from("#FinalFooter, #StringFinal", {
        duration: 1,
        opacity: 0,
        y: -100,
        ease: "power3.out",
    })
}


function FooterStringAnimation(){
    var initialPath = `M 10 50 Q 525 50 1050 50`;
    var Path = `M 10 50 Q 525 50 1050 50`;

    var STRING = document.querySelector("#StringFinal");

    STRING.addEventListener("mousemove", function (dets) {
        var svgElement = STRING.querySelector("svg");

        var boundingBox = svgElement.getBoundingClientRect();

        var relativeX = dets.clientX - boundingBox.left;
        var relativeY = dets.clientY - boundingBox.top;

        initialPath = `M 10 50 Q ${relativeX} ${relativeY} 1100 50`;

        gsap.to("#STRING path", {
            attr: { d: initialPath },
            duration: 0.2,
            ease: "power3.out",
        });
    });

    STRING.addEventListener("mouseleave", function () {
        gsap.to("#STRING path", {
            attr: { d: Path },
            duration: 1.3,
            ease: "elastic.out(1, 0.1)",
        });
    });
}


function TestimonialAnimation() {
    let currentTestimonial = 0;
    const totalTestimonials = 5;  
    const testimonialContainer = document.getElementById("Tcards");

    const testimonialPositions = [0, -60, -120, -180, -240];


    function updateStarColors() {
        document.querySelectorAll('#Tstars svg').forEach((star, index) => {
            if (index === currentTestimonial) {
                gsap.to(star, {
                    duration: 0.2,
                    fill: "#B9FF66",
                });
            } else {
                gsap.to(star, {
                    duration: 0.2,
                    fill: "white",
                });
            }
        });
    }

    document.querySelector('.ArrRight').addEventListener('click', () => {
        if (currentTestimonial < totalTestimonials - 1) {
            currentTestimonial++;
        } else {
            currentTestimonial = 0;
        }
        
        gsap.to(testimonialContainer, {
            duration: 1,
            xPercent: testimonialPositions[currentTestimonial], 
            ease: "power1.out"
        });
        
        updateStarColors();
    });

    document.querySelector('.ArrLeft').addEventListener('click', () => {
        if (currentTestimonial > 0) {
            currentTestimonial--;
        } else {
            currentTestimonial = totalTestimonials - 1;
        }

        gsap.to(testimonialContainer, {
            duration: 1,
            xPercent: testimonialPositions[currentTestimonial],
            ease: "power1.out"
        });
        
        updateStarColors();
    });

    let currentStar = null;

    document.querySelectorAll('#Tstars svg').forEach((star, index) => {
        star.addEventListener('click', () => {
            if (currentStar) {
                gsap.to(currentStar, {
                    duration: 0.2,
                    fill: "white",
                });
            }

            gsap.to(star, {
                duration: 0.2,
                fill: "#B9FF66",
            });

            currentStar = star; 
            currentTestimonial = index;  

            gsap.to(testimonialContainer, {
                duration: 1,
                xPercent: testimonialPositions[currentTestimonial],
                ease: "power1.out",
            });

            updateStarColors();
        });
    });

    updateStarColors();
}


function Page2BAnimation(){
    var tl2b = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2B",
            scroller: "body",
            start: "top 80%",
            end: "top 40%",
            scrub: 2,
        }
    })

    tl2b.from("#page2B", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power3.out",
    })

    tl2b.from("#page2B h1", {
        duration: 1,
        opacity: 0,
        y: -100,
        ease: "power3.out",
    })
}


function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = (new Date()).getTime();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn(...args);
        }
    };
}


function createPopImage(x, y) {
    const div = document.createElement('div');
    div.classList.add('pop-div');

    const img = document.createElement('img');
    img.src = getRandomImageUrl();
    img.classList.add('pop-image');

    div.appendChild(img);
    document.querySelector('#page2B').appendChild(div);

    const randomRotation = Math.random() * 30 - 15;

    gsap.set(div, {
        x: x, 
        y: y, 
        rotation: randomRotation
    });

    gsap.to(img, {
        duration: 1,
        y: '-80%',
        opacity: 1,
        ease: 'elastic.out(1.2, 0.75)',
        onComplete: () => {
            gsap.to(img, {
                duration: 0.8,
                y: '250%',
                ease: 'power3.inOut',
                onComplete: () => div.remove(),
            });
        }
    });
}

const imageUrls = [
    "https://images.unsplash.com/photo-1636152147448-a0a9ad1119bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1685118419397-c8ed456734ec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1579156618447-e967604df979?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1622599476652-949701db25a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1579156618441-0f9f420e2a25?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1499417267106-45cebb7187c9?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1595004699237-8b72f3fedca9?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661501234169-b3485afce9eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664301030398-721303962f5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661504402886-4a4fefe9dc99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673830185552-45cd9d2fba48?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677009540422-c114f5375b9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGpvYnN8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1673830186289-b4d2619212b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1676809172626-34d0538cc8e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675032315699-a14e2e32b67e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1672287579498-08cd90130b0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1576671494903-8e2bb9327205?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1618193139062-2c5bf4f935b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683133974170-762dc561d292?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727951255780-ae0c36d63179?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1716841041744-1c4fba547ccc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727258720973-fefc6360944d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624386753213-433d83bf6284?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/flagged/photo-1580051579393-2e94dd6f4789?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661890097755-fc3ee6dccb85?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1721963697056-e8cde3b8eb53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1685056533706-5af828d13dc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664303560263-5ff736a9a370?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1684017834521-ac0d1edbd23d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];


function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}


// Smooth scroll functionality
function initSmoothScroll() {
    // Navigation scroll function
    function goTo(targetSelector) {
        const targetEl = document.querySelector(targetSelector);
        if (!targetEl) return;
        
        targetEl.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }

    // Add click event to Contact Us navigation
    document.querySelector('.overlay.Contact').addEventListener('click', function(e) {
        e.preventDefault();
        goTo('#page6');
    });

    // Optional: Add smooth scroll to other navigation items
    document.querySelector('.overlay.About')?.addEventListener('click', function(e) {
        e.preventDefault();
        goTo('#page1');
    });

    document.querySelector('.overlay.Service')?.addEventListener('click', function(e) {
        e.preventDefault();
        goTo('#page2');
    });

    document.querySelector('.overlay.FAQ')?.addEventListener('click', function(e) {
        e.preventDefault();
        goTo('#page4B');
    });

    // Add smooth scroll to "Take Test Free" buttons
    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.trim() === 'Take Test Free') {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                goTo('#page3');
            });
        }
    });
}

window.onload = async function () {
    document.querySelector(".preloader").classList.add("hide");

    var tl = gsap.timeline();

    tl.from(nextContent[0], {
        delay: 2,
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut",
    }, "an");

    tl.from(nextContent[1], {
        delay: 2,
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut",
    }, "an");

    tl.from(elements, {
        delay: 2,
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
    }, "an");

    gsap.from(elem[0], {
        delay: 2,
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });

    gsap.from(elem[1], {
        delay: 2,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });

    gsap.from(elem[2], {
        delay: 2,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });

        gsap.from("#hright img", {
            delay: 2,
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.08,
            onComplete: async function () {
                // Initialize smooth scroll functionality
                initSmoothScroll();
                
                CursorAnimation()
                animateText();
                ImageAnimation();
                InfinityScrollAnimation()
                Page2Animation()
                StringAnimation()
                WorkingProcessAnimation()
                FAQAnimation()
                FAQStringAnimation()
                Page3Animation()
                Page4Animation()
                Page4BAnimation()
                Page6Animation()
                FooterStringAnimation()
                FooterAnimation()
                TestimonialAnimation()
                Page2BAnimation();

                Shery.mouseFollower({
                skew: true,
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
            });

            Shery.makeMagnet("button", {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
            });

            Shery.makeMagnet("#animatedText", {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
            });

            Shery.makeMagnet(".LearnM", {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
            });
                        
            Shery.makeMagnet(".wp", {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
            });
            
            Shery.makeMagnet(".Tarrow", {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)", 
                duration: 1,
            })

            Shery.makeMagnet("#Fright", {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)", 
                duration: 1,
            })

            Shery.makeMagnet("#FinalFooter", {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)", 
                duration: 1,
            })

            Shery.makeMagnet("#Fleft h2", {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)", 
                duration: 1,
            })

            document.querySelector("#page2B").addEventListener('mousemove', throttle((e) => {
                const rect = document.querySelector("#page2B").getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                createPopImage(x, y);
            }, 250));
        },
    });
};
