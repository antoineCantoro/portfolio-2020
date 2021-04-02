<template>
  <div>
    <div class="circles circle_fill" pSpeed="2"></div>
    <div class="circles circle_outline" pSpeed="1"></div>
  </div>
</template>

<script>

export default {
  methods: {
    launchParallaxeScroll: function(){
        let circleFill = document.querySelector('.circle_fill')
        let circleFillSpeed = circleFill.getAttribute("pSpeed")

        let circleOutline = document.querySelector('.circle_outline')
        let circleOutlineSpeed = circleOutline.getAttribute("pSpeed")

        document.addEventListener("scroll", function(e){
            let currentPosition = document.documentElement.scrollTop
            circleFill.style.transform = "translateY("+ currentPosition / 10 * -circleFillSpeed + "px)";
            circleOutline.style.transform = "translateY("+ currentPosition / 10 * -circleOutlineSpeed + "px)";
        })
        requestAnimationFrame(this.launchParallaxeScroll)
    },
    launchParallaxeCursor: function(){
        let circleFill = document.querySelector('.circle_fill')
        let circleFillSpeed = circleFill.getAttribute("pSpeed")

        let circleOutline = document.querySelector('.circle_outline')
        let circleOutlineSpeed = circleOutline.getAttribute("pSpeed")

        document.addEventListener("mousemove", function(e){
            circleFill.style.transform = "translate("+ e.clientX / 10 * circleFillSpeed + "px,"+ e.clientY / 10 * circleFillSpeed + "px)";
            circleOutline.style.transform = "translate("+ e.clientX / 10 * circleOutlineSpeed + "px,"+ e.clientY / 10 * circleOutlineSpeed + "px)";

        })
        requestAnimationFrame(this.launchParallaxeCursor)
    }
  },
  mounted() {
    if (process.client) {
        this.launchParallaxeScroll()
    }
  }
}
</script>

<style lang="scss" scoped>
.circles {
    z-index: -1;
    height: 414px;
    width: 414px;
    border-radius: 100%;
    position: absolute;

    //animation: circleMove 5s;
    //animation-iteration-count: infinite;
}

@keyframes circleMove
{
  0%   {transform: translate(0,0), scale(1);}
  25%  {transform: translate(10px,10px), scale(0.8)}
  50%  {transform: translate(15px,10px)}
  75%  {transform: translate(0,0)}
  100% {transform: translate(0,0)}
}

@keyframes circleScale
{
  0%   {transform: scale(1);}
  50%  {transform: scale(0.95)}
  100% {transform: scale(1)}
}

.circle_fill {
    top: -140px;
    left: -120px;
    background: #d8d8d8;
    opacity: 0.02;
}
.circle_outline {
    top: -120px;
    left: -140px;
    border: solid 2px #ffffff;
    opacity: 0.12;
}


@media (min-width: 768px) { 
    .circles {
        height: 640px;
        width: 640px;
    }
}

@media (min-width: 1200px) { 
    .circles {
        height: 960px;
        width: 960px;
    }
    .circle_fill {
        top: 160px;
        left: -300px;
    }
    .circle_outline {
        top: 180px;
        left: -320px;
    }
}
</style>
