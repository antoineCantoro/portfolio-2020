<template>  
    <div class="ProjectImg_Container">
        <div class="ProjectImg_Wrapper">
            <div class="ProjectImg_Overay"></div>
            <img :src="imgSrc" :class="[imgClass]" class="ProjectImg_Img" loading="lazy" alt="">
        </div>
        
    </div>
</template>

<script>
import gsap from "gsap"
import imagesLoaded from 'imagesloaded'

export default {
    props: 
        ['imgClass', 'imgSrc', 'imgAlt']
    ,
    methods: {
        triggerPhoto: function(){
            let ratio = 0.75
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: ratio
            }
            let self = this

            const callback = function (entries, observer) {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > ratio) {
                        self.showPhoto()
                        observer.unobserve(self.$el)
                    }
                });
            }
            
            var observer = new IntersectionObserver(callback, options);
            observer.observe(this.$el)
        },
        showPhoto: function(){
            let self = this
            let el = self.$el
            var tl = gsap.timeline();
                tl.to(el.querySelector('.ProjectImg_Overay'), {width: 0, duration: 1, ease: "power4.out"})
                tl.from(el.querySelector('.ProjectImg_Img'), {scale:1.1, duration: 1, ease: "power4.out"},"-=1")
        }
    },
    mounted() {
        if (process.client) {
            let self = this
            
            imagesLoaded(this.$el, function() {
                self.triggerPhoto()
            });
        }
    }
}
</script>

<style lang="scss">
.ProjectImg_Container {
    position: relative;
    margin: 30px 0;

    .ProjectImg_Wrapper {
        position: relative;
        overflow: hidden;}

    .ProjectImg_Overay {
        z-index: 2;
        background: #000;
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;}

    .ProjectImg_Img {
        width: 100%;}

}

@media (min-width: 768px) { 
    
}

@media (min-width: 1200px) {
    .ProjectImg_Container {
        margin: 105px 0;

        &.img1 {
            width: 58.333%;
            margin-left: 8.333%;}

        &.img2 {
            width: 41.666%;
            margin-left: 50%;}

        &.img3 {
            width: 66.666%;
            margin-left: 16.666%;}

        &.img4 {
            width: 100%;}
    }
}
</style>