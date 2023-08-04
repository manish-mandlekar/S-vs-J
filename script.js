function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#wrap"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#wrap" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#wrap", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#wrap").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();

gsap.from("#page1>h1",{
  // stagger:0.5,
  duration:1,
  x:-400,
 
})
gsap.from("#head",{
  // stagger:0.5,
  duration:1,
  delay:.5,
  y:-400,
 
})
gsap.from("#page1>h2,#page1 h3",{
  // stagger:0.5,
  duration:1,
  y:400,
  delay:1,
 
})
gsap.from("#page1>button",{
  // stagger:0.5,
  duration:1,
  y:400,
  delay:1.5,
 
})
gsap.from("#page1>#t1,#page1>#t2",{
  // stagger:0.5,
  duration:1,
 scale:4,
  delay:2,
 
})
gsap.from("#page2>#five",{
  // stagger:0.5,
  duration:1,
  x:-400,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#wrap",
    start:"top 15%",
    end:"end 0%",
    scrub:4,

  }
 
})
gsap.from("#page2>#four",{
  // stagger:0.5,
  duration:1,
  x:-400,
  delay:2,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#wrap",
    start:"top 10%",
    end:"end 0%",
    scrub:4,

  }
 
})
gsap.from("#page2>#three",{
  // stagger:0.5,
  duration:1,
  x:-400,
  delay:2,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#wrap",
    start:"top 6%",
    end:"end 0%",
    scrub:4,

  }
 
})
gsap.from("#page2>#two",{
  // stagger:0.5,
  duration:1,
  x:-400,
  delay:3,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#wrap",
    start:"top 3%",
    end:"end 0%",
    scrub:4,

  }
 
})
gsap.from("#page2>#one",{
  // stagger:0.5,
  duration:1,
  x:-400,
  delay:4,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#wrap",
    start:"top 0%",
    end:"end 0%",
    scrub:4,

  }
  
 
})
gsap.from("#page2>h1,#page2>h3,#t3,#t4",{
  // stagger:0.5,
  duration:1,
  x:400,
  delay:4,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#wrap",
    start:"top 10%",
    end:"end 0%",
    scrub:4,

  }
  
 
})

gsap.from("#sun",{
  y:400,
  duration: 1,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#wrap",
    start:"top 40%",
    end:"end 20%",
    scrub:4,

  }
})
gsap.from("#s",{
  y:400,
  duration: 1,
  delay:1,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#wrap",
    start:"top 30%",
    end:"end 20%",
    scrub:4,

  }
})
gsap.from("#c",{
  y:400,
  duration: 1,
  delay:2,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#wrap",
    start:"top 20%",
    end:"end 20%",
    scrub:4,

  }
})
gsap.from("#t",{
  y:400,
  duration: 1,
  delay:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#wrap",
    start:"top 10%",
    end:"end 20%",
    scrub:4,

  }
})
gsap.from("#palm",{
  y:500,
  duration: 1,
  delay:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#wrap",
    start:"top 10%",
    end:"end 20%",
    scrub:4,

  }
})
gsap.from("#car",{
  x:800,
  duration: 1,
  delay:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#wrap",
    start:"top 10%",
    end:"end 20%",
    scrub:4,

  }
})
gsap.from("#p,#page3 h5",{
  x:-800,
  duration: 1,
  delay:3,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#wrap",
    start:"top 10%",
    end:"end 20%",
    scrub:4,

  }
})

gsap.from("#main",{
  y:1500,
  rotateX:"-20deg",
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#wrap",
    start:"top 0%",
    end:"end -40%",
    scrub:4,
  }
})
gsap.from("#main2",{
  y:1500,
  rotateX:"-10deg",
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#wrap",
    start:"top -50%",
    end:"end -110%",
    scrub:4,
  }
})
gsap.from("#main3",{
  y:1500,
  rotateX:"-10deg",
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#wrap",
    start:"top -80%",
    end:"end -150%",
    scrub:4,
  }
})
gsap.from("#main4",{
  x:2500,
  rotateY:"10deg",
  // scaleX:1.5,
  // scaleY:1.5,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#wrap",
    start:"top -90%",
    end:"end -200%",
    scrub:4,
  }
})
gsap.from("#page4 h1,#page4 h2",{
   scale:0,
  scaleX:1.5,
  scaleY:1.5,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#wrap",
    start:"top 10%",
    end:"end 10%",
    scrub:4,
  }
})
gsap.from("#topa",{
 y:500,
 scrollTrigger:{
   trigger:"#page4",
   scroller:"#wrap",
   start:"top 10%",
   end:"end 10%",
   scrub:4,
 }
})