<template>
    <div class="skill_item SkillItem">
        <div class="skill_icon pyramid_icon SkillItem__Icon"> </div>
        <h3 class="SkillItem__Name">{{name}}</h3>
        <p class="SkillItem__Description">{{desc}}</p>
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
.SkillItem {
    padding-top: 5em;

    .SkillItem__Icon {
        width: 5em;
        height: 5em;
        margin-bottom: 1.5em;}

    .SkillItem__Name {
        font-family: 'Gilroy', sans-serif;
        font-size: 1.2em;
        font-weight: 600;}

    .SkillItem__Description {
        font-size: 1em;
        letter-spacing: 0.5px;
        opacity: 0.5;
        padding: 1em 0 1.5em;}

    ul {
        padding: 0;}

    li {
        font-size: 0.9em;
        margin: 1rem 0;
        list-style-type: none;
        
        &::before {
            content: "";
            width: 24px;
            height: 1px;
            opacity: 0.13;
            background: #fff;
            display: inline-block;
            margin-right: 20px;}
        
        &:first-child {
            margin-top: 0;}
    }
}

@media (min-width: 768px) { 
    .SkillItem {
        &:first-child {
            padding-top: 0px;}
    
        .SkillItem__Icon {
            width: 7.5em;
            height: 7.5em;
            margin-bottom: 1.5em;}

        .SkillItem__Name {
            font-size: 2em;}

        .SkillItem__Description {
            font-size: 1.15em;
            width: 60%;}

        li {
            font-size: 1.25em;}
    }
}



@media (min-width: 1200px) { 
    .SkillItem {
        width: 33.333%;
        padding-top: 0;
        padding-right: 20px;

        .SkillItem__Description {
            width: 100%;}
    }
}
</style>