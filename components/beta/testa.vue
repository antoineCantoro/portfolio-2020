<template>
    <h1 class="h1Test">This is a test </h1>
</template>
<script>
import global from  '~/mixins/global.js'
import gsap from "gsap";

export default {
    mixins: [global],
    methods: {
        displayQuote: function(){
            console.log('ok')
            let self = this
            gsap.to(self.$el, {top: 0, opacity: 1, duration: 1, ease: "power4.out"});
        }
    },
    mounted() {
        this.test(this.$el, 0.5)
    }
}
</script>
<style lang="scss">
.h1Test {
    opacity: 0;
    position: relative;
    top: 20px;
}
</style>