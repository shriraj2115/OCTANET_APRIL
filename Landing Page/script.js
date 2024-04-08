 var ab = gsap.timeline()



gsap.from(".img1",{
    x:-100,
    duration:2,
    opacity:0,
    delay:1.1,
})
gsap.from(".img2",{
    x:100,
    duration:2,
    delay:1.3,
    opacity:0,
})
gsap.from(".img3",{
    x:100,
    duration:2,
    delay:1.5,
    opacity:0,
})
gsap.from(".img4",{
    x:-100,
    duration:2,
    delay:1.6,
    opacity:0,
})
