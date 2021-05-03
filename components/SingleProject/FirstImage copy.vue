<template>
<section class="photo_container">
    <div class="photo_wrapper">
        <div class="photo_overlay"></div>
        <img src="~/static/img/staticswim/visu1.jpg" class="photo_item" loading="lazy">
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
            let ratio = 0.25
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
                tl.to(el.querySelector('.photo_wrapper'), {width: "100%", duration: 1, ease: "power4.out"})
                tl.to(el.querySelector('.photo_overlay'), {width: 0, duration: 1, ease: "power4.out"})
                tl.from(el.querySelector('.photo_item'), {scale:1.1, duration: 1, ease: "power4.out"},"-=1")
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

<style lang="scss" scoped>
.photo_container {
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding-right: 20em;
    margin: 8em 0;
}
.photo_wrapper {
    width: 0%;
    height: 100%;
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


//

/*
.project_cover_container {
    

    img { width: 100%;}
}
@media (min-width: 768px) { 
    .project_cover_container {
        width: 100%;
        padding-right: 4em;}
}
@media (min-width: 1200px) {
    .project_cover_container {
        padding-right: 20em;
        margin: 8em 0;}
}
*/
</style>
