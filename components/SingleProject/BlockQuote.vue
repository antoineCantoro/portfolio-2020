<template>  
    <section class="QuoteContainer col_lg">
       <p class="QuoteItem" ref="quote">"{{quote}}"</p>
    </section>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import {SplitText} from "gsap/dist/SplitText"
gsap.registerPlugin(SplitText,ScrollTrigger);

export default {
    methods: {
        displayQuote: function(){
            
            let splitQuoteChild = new SplitText(this.$refs.quote, {type: "lines"});
            new SplitText(this.$refs.quote, {type: "lines", linesClass: "QuoteItem__parent"});
            
            gsap.from(
                splitQuoteChild.lines,
                {yPercent: 100, duration: 1, ease: "power4.out", stagger:0.1,
                    scrollTrigger: {
                        trigger: this.$refs.quote,
                        start: "top center",
                    },
                }
            ) 
        },
        
    },
    props: ['quote'],
    mounted() {
        this.displayQuote()
    },
    beforeDestroy() {
        console.log('reset ?')
    }
}
</script>

<style lang="scss">
.QuoteItem__parent {
    overflow: hidden;
}
.QuoteContainer {
    padding: 0 30px;
    margin: 5em 0px;

    .QuoteItem {
        font-family: 'Manrope', sans-serif;
        font-size: 2em;
        line-height: 1.5;
        font-weight: 300;
        overflow: hidden;
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