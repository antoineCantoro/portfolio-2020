export default {

    methods: {
        test: function(el, ratio) {

            console.log("ready")

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
        },
        

    },
    mounted() {
        //this.test()
    }

}