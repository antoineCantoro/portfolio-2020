import gsap from "gsap";
import Vue from 'vue'

Vue.mixin({
    methods:{
        leavingPage(done){
            var tl = gsap.timeline();
                tl.set('.transition_section', {top: "unset", bottom: 0})
                tl.to(".transition_section", {height: "100vh", duration: 1, ease: "power3.inOut"})
                tl.to(".container", {y: -50, duration: 1, ease: "power3.inOut", onComplete: done}, "-=1");
        },
        enteringPage(done){
            var tl = gsap.timeline();
                tl.set('.transition_section', {top: 0, bottom: "unset"})
                tl.to(".transition_section", {height: "0vh", duration: 1, ease: "power3.inOut"})
                tl.from(".container", {y: 50, duration: 1, ease: "power3.inOut", onComplete: done}, "-=1");
        },
    }
})