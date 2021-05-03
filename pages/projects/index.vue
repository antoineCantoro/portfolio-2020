<template>
  <div class="container col_lg ProjectList_Container">
    <div class="ProjectList_Header">
      <h1 class="ProjectList_Title">Let's check my case studies</h1>
      <p class="ProjectList_Desc">Une liste de projets auxquels j'ai eu la chance de participer durant ces dernières années. Des projets aux univers et aux thématiques variés que vous pouvez découvrir de façon détaillée au travers de diverses études de cas.</p>
    </div>

    <nuxt-link to="/projects/aceGbs" class="ProjectList_Item">
      <div class="imgsection project_ace"><img src="~/static/svg/acegbs_logo.svg" loading="lazy" alt="Ace Gbs white logo for project"/></div>
      <span class="ProjectList_ItemTitle">Ace Global Services</span>
    </nuxt-link>

    <nuxt-link to="/projects/staticSwim" class="ProjectList_Item">
      <div class="imgsection project_staticswim"><img src="~/static/svg/staticswim_logo.svg" loading="lazy" alt="Static Swim white logo for project"/></div>
      <span class="ProjectList_ItemTitle">Static Swim</span>
    </nuxt-link>

    <nuxt-link to="/projects/nuitDigitale" class="ProjectList_Item">
      <div class="imgsection project_nuitdigitale"><img src="~/static/svg/nuitdigitale_logo.svg" loading="lazy"  alt="La Nuit Digitale white logo for project"/></div>
      <span class="ProjectList_ItemTitle">La Nuit Digitale</span>
    </nuxt-link>
     
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Case Studies • Antoine Cantoro',
    }
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
<style lang="scss" scoped>
.ProjectList_Container {
  padding: 0 30px;

  .ProjectList_Item {
    width: 100%;
    margin: 5em 0;
    display: block;
    position: relative;
    text-decoration: none;

    .imgsection {
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;}

    .ProjectList_ItemTitle {
      display: block;
      font-family: 'Gilroy', sans-serif;
      font-size: 2em;
      font-weight: 500;
      color: #fff;
      margin: 0.5em 0;}
  }

}

@media (min-width: 768px) { 
}
@media (min-width: 1200px) {
  .ProjectList_Container {
    padding: 0;
    
    .ProjectList_Title {
      font-size: 4em;
      padding-right: 41.666%;
      padding-left: 16.666%;
      width: 100%;}
    
    .ProjectList_Desc {
      font-size: 1.25em;
      line-height: 2;
      padding-left: 33.333%;
      padding-right: 16.666%;}

    .ProjectList_Item {
      display: block;
      margin: 120px 0;
      padding: 0 33.333%;

      .imgsection {
        height: 500px;}
      
    }
  }

}

  .project_ace {
    background: #fbab7e;
    background: linear-gradient(45deg,#fbab7e,#f7ce68);
      img {
        width: 70%;} 
  }
  .project_staticswim {
    background: #96e6a1;
    background: linear-gradient(45deg,#96e6a1,#d4fc79);
    
    img {
        width: 35%;} 
  }
  .project_nuitdigitale {
    background: #5d7f81;
    background: linear-gradient(45deg,#5d7f81,#f7f8f0);
    
    img {
        width: 45%;} 
  }
</style>
