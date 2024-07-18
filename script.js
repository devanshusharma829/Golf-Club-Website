gsap.to("#nav" ,{
    backgroundColor: "black",
    duration: 0.5 ,
    height:"115px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -5%",
        end: "bottom -11%",
        scrub: 1
    }
})


gsap.to(".main" ,{
    backgroundColor: "rgba(0, 0, 0 ,0.95)",
    duration: 0.5 ,

    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -75%",
        scrub: 2
    }
})

gsap.from(".card",{
    scale:0.6 ,
    opacity:0 ,
    duration: 0.5 ,
    // stagger: 0.5 ,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 62%",
        scrub: 1

        
    }
})
gsap.from("#about-us img , #about-us-in",{
    x:-150 ,
    opacity:0 ,
    duration: 4.1 ,
    stagger: 0.5 ,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 52%",
        scrub: 2

        
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 47%",
        scrub: 3
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
})


let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.x -9 + "px";
    cursor.style.top = e.y -9  + "px";
    cursorBlur.style.left = e.x -150 + "px";
    cursorBlur.style.top = e.y  -150 + "px";
    

})


const cursorDiv = document.querySelector("#cursor");
const navEle = document.querySelectorAll(".nav-elements");
function changeCursor() {
    cursorDiv.style.backgroundColor = "transparent";
    cursorDiv.style.width = "85px" ;
    cursorDiv.style.height = "85px" ;
    cursorDiv.style.border = "2px solid white" ;
    cursorDiv.style.transform = "translate(-40px,-40px)";
    cursorDiv.style.transition = "all  250ms linear";
    cursorDiv.style.transitionDelay = "-50ms";
    navEle.style.color = "#95c11e";
    
}

function resetCursor() {
    cursorDiv.style.backgroundColor = "#95c11e";
    cursorDiv.style.width = "20px" ;
    cursorDiv.style.height = "20px" ;
    cursorDiv.style.border = "none" ;
    cursorDiv.style.transform = "none";
    cursorDiv.style.transition = "none";
    cursorDiv.style.transition = "all  250ms linear";
    cursorDiv.style.transitionDelay = "-50ms";
    navEle.style.color = "white";

    // Add any other properties you want to reset on mouseout
}
  