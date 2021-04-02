<template>  
    <div class="ExperienceItem">
        <div>
            <h3 class="ExperienceItem__JobName">{{jobName}}</h3>
            <span class="ExperienceItem__CompanyName">/ {{companyName}}</span>
        </div>
        <span class="ExperienceItem__JobYears">{{years}}</span>
    </div>
</template>

<script>
import gsap from "gsap";

export default {
    props: 
        ['jobName', 'companyName', 'years']
    ,
    methods: {
      displayExp: function(){
        let self = this
        gsap.to(self.$el, {y: 0, opacity: 1, duration: 2, ease: "power4.out"});
      },
    },
    mounted() {
        let ratio = 0.6
        let options = {
          root: null,
          rootMargin: '0px',
          threshold: ratio
        }
        let self = this

        const callback = function (entries, observer) {
          entries.forEach(entry => {
              if (entry.intersectionRatio > ratio) {
                  self.displayExp()
                  observer.unobserve(self.$el)
              }
          });
        }
    
        var observer = new IntersectionObserver(callback, options);
        observer.observe(this.$el)
    }
}
</script>

<style lang="scss">
.ExperienceItem {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 1.5em 0;
    opacity: 0;
    transform: translateY(50px);
    border-bottom: solid 1px rgba(255,255,255,0.15);

    .ExperienceItem__JobName {
        display: inline;
        font-size: 0.9em;
        letter-spacing: -0.5px;}

    .ExperienceItem__CompanyName {
        font-size: 0.6em;
        padding-left:  4px;
        opacity: 0.5;}

    .ExperienceItem__JobYears {
        position: relative;
        font-size: 0.75em;
        opacity: 0.5;
        top: 4px;}
}

@media (min-width: 768px) { 
    .ExperienceItem {

        .ExperienceItem__JobName {
            font-size: 1.15em;
            letter-spacing: 0px;}

        .ExperienceItem__CompanyName {
            font-size: 0.8em;}

        .ExperienceItem__JobYears {
            font-size: 0.8em;
            top: 4px;}

    }
}  
</style>