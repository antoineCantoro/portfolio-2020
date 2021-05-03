<template>
<section class="photo">
    <div class="photo__wrapper" ref="wrapper">
        <div class="photo__overlay" ref="overlay"></div>
        <img src="~/static/img/perso.jpg" class="photo__picture" ref="picture" loading="lazy" alt="">
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
            let tl = gsap.timeline({
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
.photo {
    width: 80%;
    overflow: hidden;
    margin: 0 0 200px;

    &__wrapper {
        width: 0%;
        overflow: hidden;
        position: relative;
    }

    &__overlay {
        z-index: 2;
        background: #000;
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
    }
    &__picture {
        height: 100%;
    }
}
</style>
