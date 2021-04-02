import lottie from "lottie-web";
import gsap from "gsap";

window.onNuxtReady(() => {
    //console.log('site ready')

    function reveal() {
        var tl = gsap.timeline();
            tl.set('body', {height: '100vh', overflow: 'hidden'})
            tl.set(".loader", {top:"unset", bottom: 0, onComplete: function(){
                let test = document.querySelector('.svgContainer')
                lottie.loadAnimation({
                    container: test,
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: '/lotties/logo.json'
                });
            }})
            tl.to(".svgContainer", {opacity: 0, duration: 0.5, delay: 3, ease: "power4.out"})
            tl.to(".loader", {height: 0, duration: 1, ease: "power4.out"},)
            tl.set('body', {height: 'auto', overflow: 'auto'})
    }
    
    //devMode
    //gsap.set('.loader', {height: 0})
    reveal()
})