<template>
<section class="photo_container">
    <div class="photo_wrapper" ref="wrapper">
        <div class="photo_overlay" ref="overlay"></div>
        <img src="~/static/img/perso.jpg" class="photo_item" ref="picture">
    </div>
</section>
</template>

<script>

import gsap from "gsap"
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
    methods: {
        showPhoto: function(){
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.wrapper,
                    start: "top center",
                }
            });
            tl.to(this.$refs.wrapper, {width: "100%", duration: 1, ease: "power4.out"})
            tl.to(this.$refs.overlay, {width: 0, duration: 1, ease: "power4.out"})
            tl.from(this.$refs.picture, {scale:1.1, duration: 1, ease: "power4.out"}, "<")
        }
    },
    mounted() {
        this.showPhoto()
    }
}
</script>

<style lang="scss" scoped>
.photo_container {
    width: 80%;
    overflow: hidden;
    margin: 200px 0;
}
.photo_wrapper {
    width: 0%;
    overflow: hidden;
    position: relative;
}
.photo_overlay {
    z-index: 2;
    background: #000;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.photo_container img {
    height: 100%;
}
/*
.photo_item {
    //width: 100%;
    //height: 606px;
    display: inline-block;
        
}*/
</style>
