<template>  
  <section class="quote_container scroll_animation col_lg" animation-name="fade">
      <h2>{{this.actualQuote}}</h2>
      <div class="quote_author"><span></span><p>{{this.actualAuthor}}</p></div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
    data() {
        return {
            actualQuote: null,
            actualAuthor: null,
            quotes: [
                { quoteText:'Have no fear of perfection — you’ll never reach it.', quoteAuthor: 'Salvador Dali'},
                { quoteText:'Design is not just what it looks like and feels like. Design is how it works.', quoteAuthor: 'Steve Jobs'},
                { quoteText:'The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.', quoteAuthor: 'Charles Eames'},
                { quoteText:'Creativity is nothing but the way to solve new problems.', quoteAuthor: 'Diana Santos'},
                { quoteText:'Simplicity is the ultimate sophistication.', quoteAuthor: 'Leonardo da Vinci'},
                { quoteText:'People ignore designs that ignore people.', quoteAuthor: 'Frank Chimero'},
            ],
        }
    },
    methods: {
      displayQuote: function(){
        let self = this
        gsap.to(self.$el, {y: 0, opacity: 1, duration: 1, ease: "power4.out"});
      },
    },
    mounted() {
        let random = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        this.actualQuote = random.quoteText
        this.actualAuthor = random.quoteAuthor

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
.quote_container {
  padding: 120px 30px;
  opacity: 0;
  transform: translateY(100px);

  h2 {
    font-size: 36px;
    font-weight: 300;
    font-family: 'Manrope', sans-serif;}
  
  p {
    padding: 2em 0;
    font-family: 'Gilroy', sans-serif;
    font-size: 1em;
    font-weight: 600;
    text-align: right;
    color: #fff;}
}
.quote_author {
    display: flex;
    align-items: center;
    
    span {
        flex-grow: 1;
        height: 1px;
        opacity: 0.2;
        background: #fff;
        margin-right: 14px;}
}

@media (min-width: 768px) { 
  .quote_container {
    padding: 120px 60px;
    
    h2 {
        font-size: 3em;}
  }
  .quote_author {
    width: 35%;
  }
}

@media (min-width: 1200px) { 
  .quote_container {
    padding: 300px 0px;
    
    h2 {
        font-size: 4em;}
    
    p {
        font-size: 1.25em;}
  }
  .quote_author {
    width: 25%;
  }
}

</style>