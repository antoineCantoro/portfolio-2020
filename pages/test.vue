<template>
    <div class="container">
        <Testa />
    </div>
</template>

<script>
import Testa from '~/components/beta/Testa.vue'

export default {
  head () {
    return { title: 'R&D' }
  },
  components: {
    Testa, 
  },
  methods: {

  },
  mounted() {
  },
  transition: {
    mode: "out-in",
    css: false,
    enter(el,done) {
        this.enteringPage(done)
    },
    leave(el,done) {
        this.leavingPage(done)
    }
  }
}
</script>

<style>

</style>
