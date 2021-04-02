<template>
  <div>
    <Menu />
    <nuxt />
    <Loader />
    <CustomCursor/>
    <Transition/>
    <Footer/>
  </div>
</template>

<script>
import Menu from '~/components/Layout/Menu.vue'
import Loader from '~/components/Layout/Loader.vue'
import CustomCursor from '~/components/Layout/CustomCursor.vue'
import Transition from '~/components/Layout/Transition.vue'
import Footer from '~/components/Layout/Footer.vue'

export default {
  components: {
    Menu, Loader, CustomCursor, Transition, Footer
  },
}
</script>
<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
