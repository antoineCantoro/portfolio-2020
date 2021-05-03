<template>
<section class="photo_container">
    <div class="photo_wrapper">
        <div class="photo_overlay"></div>
        <img :src="photoUrl" class="photo_item" loading="lazy">
    </div>
</section>
</template>

<script>
import gsap from "gsap"
import imagesLoaded from 'imagesloaded'

export default {
    props: 
        ['photoUrl', 'photoAlt', 'imgType']
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
                tl.to(el.querySelector('.photo_overlay'), {width: 0, duration: 1, ease: "power4.out"})
                tl.from(el.querySelector('.photo_item'), {scale:1.1, duration: 1, ease: "power4.out"},"-=1")
        },
        resizePhoto: function(){
            let element = document.querySelector('.col_lg')
            var style = element.currentStyle || window.getComputedStyle(element);
                //console.log(style.margin)
            let mCont = style.marginLeft
                mCont = parseInt(mCont, 10);
                //console.log(mCont)
            let Iwidth = 1200/12*10
                //console.log("W = " + Iwidth)
            let test = mCont + Iwidth
            let photoTest = document.querySelector('.photo_item')
                photoTest.style.width = test+"px"

            let photoCTest = document.querySelector('.photo_container')
                photoCTest.style.width = test+"px"
        },
        
    },
    mounted() {
        if (process.client) {
            let self = this
            
            imagesLoaded(this.$el, function() {
                self.triggerPhoto()
            });


            if (window.matchMedia("(min-width: 1200px)").matches) {
                self.resizePhoto()
            }
            window.addEventListener("resize", function(){
                if (window.matchMedia("(min-width: 1200px)").matches) {
                    self.resizePhoto()
                } else {
                    self.$el.querySelector(".photo_item").style.width = "100%"
                }
            })

            
        }
    }
}
</script>

<style lang="scss" scoped>
.photo_container {
    overflow: hidden;
    width: 100%;
    margin: 4em 0;
    padding-right: 30px;
}
.photo_wrapper {
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

.photo_item {
    width: 100%;
}

@media (min-width: 768px) { 
    .photo_container {
        margin: 8em 0;}
}

@media (min-width: 1200px) { 
.photo_container {
    padding-right: 0%;}
}
</style>
