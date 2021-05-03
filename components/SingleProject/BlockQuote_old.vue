<template>  
    <section class="QuoteContainer col_lg">
       <q class="QuoteItem">{{quote}}</q>
    </section>
</template>

<script>
import gsap from "gsap";

export default {
    methods: {
        displayQuote: function(){
            let self = this
            gsap.to(self.$el, {y: 0, opacity: 1, duration: 1, ease: "power4.out"});
        },
    },
    props: 
        ['quote']
    ,
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
                    self.displayQuote()
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
.QuoteContainer {
    padding: 0 30px;
    margin: 5em 0px;
    opacity: 0;
    transform: translateY(100px);

    .QuoteItem {
        font-family: 'Manrope', sans-serif;
        font-size: 2em;
        line-height: 1.5;
        font-weight: 300;
    }
}

@media (min-width: 768px) { 
    .QuoteContainer {
        padding: 0 30px;
        margin: 5em 0px;
    
        .QuoteItem {
            font-size: 3.5em;}
    }
}

@media (min-width: 1200px) {
    .QuoteContainer {
        padding: 0 30px;
        margin: 5em auto;
    
        .QuoteItem {
            font-size: 4em;}
    }
}
</style>