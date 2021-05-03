export default {
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
