<template>
    <div class="customCursor" v-if="isActive" :style="{ left: cursorCircle.x + 'px', top: cursorCircle.y + 'px' }">
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: true,
            mousePosition: {
                x:-15,
                y:-15,
            },
            cursorCircle: {
                x:-20,
                y:-20,
                speed:0.25,
            },
        }
    },
    methods: {
      updateCursor: function(event){

          //Circle 
          let distCircleX = this.mousePosition.x - this.cursorCircle.x
          let distCircleY = this.mousePosition.y - this.cursorCircle.y
          
          this.cursorCircle.x = this.cursorCircle.x + (distCircleX * this.cursorCircle.speed)
          this.cursorCircle.y = this.cursorCircle.y + (distCircleY * this.cursorCircle.speed)

          requestAnimationFrame(this.updateCursor)

      },
      initCursor: function() {
          let self = this
          document.addEventListener("mousemove",function(event){
            self.mousePosition.x = event.clientX
            self.mousePosition.y = event.clientY
          })
          document.addEventListener("resize",function(event){
              self.checkMobile()
          })
      },
      checkMobile: function() {
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
              this.isActive = false
          } else if (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
              this.isActive = false
          } else {
              this.isActive = true
          }     
      },
    },
    mounted() {
        this.updateCursor()
        this.initCursor()  
        this.checkMobile()  
    },
    destroyed () {
        document.removeEventListener("mousemove",function(){})
    }
}
</script>
<style>
.customCursor {
  border-radius: 100px;
  mix-blend-mode: difference;
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  backface-visibility: hidden;
  z-index: 1000;
  pointer-events: none;
  transform: translateX(-50%) translateY(-50%);
}

@media (min-width: 992px) { 
    .cursorCircle,
    .cursorDot {
        pointer-events:none;
        position: fixed;
        z-index: 9999;
        mix-blend-mode: difference;
        border-radius: 100%;
        transform: translateX(-50%) translateY(-50%);
    }
    .cursorDot {
        width: 4px;
        height: 4px;
        mix-blend-mode: difference;
        background: black;
    }
    .cursorCircle {
        width: 26px;
        height: 26px;
        border: solid 2px black;
    }

    #cursorContainer{
        z-index: 9999;
        position: relative;
    }
    body {
        cursor: none;
    }
}

/*IPAD FIXES IOS13*/

/* ----------- iPad Pro ----------- */
/* Portrait and Landscape */
@media only screen 
  and (width: 1024px) 
  and (height: 1366px) 
  and (-webkit-min-device-pixel-ratio: 1.5) {
    #cursorContainer{
      display: none;
    } 
}

@media only screen and (max-device-width: 768px) {
  #cursorContainer{
    display: none;
  }
}
</style>