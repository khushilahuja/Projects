var csr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")

document.addEventListener("mousemove",function(dets){
    csr.style.left = dets.x+"px"
    csr.style.top = dets.y+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
})
// document.addEventListener("mousemove",function(dets){
//     blur.style.left = dets.x+"px"
//     blur.style.top = dets.y+"px"
// })


// for nav h4 hover icons
var h4all = document.querySelectorAll("nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        csr.style.scale = 3
        csr.style.border = "1px solid white"
        csr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        csr.style.scale = 1
        csr.style.border = "0px solid #95C11E"
        csr.style.backgroundColor = "#95C11E"
    })
})




// for navigation gsap

gsap.to("nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -35%",
        end:"top -70%",
        scrub:2
    }
})



// for about us section

gsap.from("#aboutus img,#aboutdetail",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#aboutus",
        scorller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})


gsap.from(".cards",{
    scale:0.5,
    opacity:0,
    duration:0.5,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scorller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 48%",
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})