<template>
    <div class="skill_item scroll_animation">
        <div class="skill_icon pyramid_icon"> </div>
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
        <ul>
            <li v-for="item in listSkills" :key="item">{{item}}</li>
        </ul>
    </div>


</template>
<script>
import lottie from "lottie-web";

export default {
    props: 
        ['name', 'svgId', 'desc', 'listSkills']
    ,
    data() {
        return {
            anim: null,
        }
    },
    methods: {
      initLottie: function(){
            this.anim = lottie.loadAnimation({
                container: this.$el.children[0],
                renderer: 'svg',
                loop: false,
                autoplay: false,
                //path: 'https://assets4.lottiefiles.com/packages/'+this.svgId+'.json'
                path: './lotties/'+this.svgId+'.json'
            });

      },
      exeLottie: function() {
            let ratio = 0.8
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: ratio
            }
            let self = this
            const callback = function (entries, observer) {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > ratio) {
                        self.launchLottie()
                        observer.unobserve(self.$el)
                    }
                });
            }
            var observer = new IntersectionObserver(callback, options);
            observer.observe(this.$el)
        },
        launchLottie: function(){
            this.anim.play()
        }
    },
    mounted() {
        this.initLottie()
        this.exeLottie()
    }
}
</script>
<style lang="scss">

</style>