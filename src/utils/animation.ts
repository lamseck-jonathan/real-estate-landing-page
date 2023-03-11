import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export function mouseInfinite(className:string){
    gsap.from(className,{
        y:-20,
        duration:1,
        yoyo:true,
        repeat:-1
    })
}

export function houseStaggerAnimation(className:string){
    gsap.from(className,{
        opacity:0,
        y:-200,
        duration:1,
        stagger:0.5
    })
}

export function scrollTriggerFromLeftAnimation(className:string){
    gsap.from(className,{
        scrollTrigger:{
            trigger:className,
            start:'20px 80%'
        },
        opacity:0,
        x:100,
        duration:1,
    })
}

export function scrollTriggerOpacityAnimation(className:string){
    gsap.from(className,{
        scrollTrigger:{
            trigger:className,
            start:'20px 80%'
        },
        opacity:0,
        duration:1,
    })
}



