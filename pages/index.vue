<template>
  <div class="container">
    <div class="intro_container col_lg">
        <h1>Hello, je suis Antoine, un designer qui code.</h1>
        
        <div class="flexbox">
          <div class="scroll_down_container">
            <div class="scroll_down">Scroll down</div>
          </div>
          <div class="paragraph_wrapper">
            <p ref="test">Tout commence en 2011, lorsque que j'ai créé mon premier site web "pour le fun", je n'avais aucune idée que j'en ferai finalement mon métier !</p>
            <p>Désormais diplômé d'un mastère en marketing digital, je travaille depuis plus de <span class="highlights">2 ans en tant que UI &amp; Web Designer</span> et je suis à la recherche d'une nouvelle aventure professionnelle. Je souhaite mettre en œuvre mes compétences et mon savoir faire au cœur d'un nouveau projet et d'une nouvelle équipe, et pourquoi pas <span class="highlights">la vôtre ?</span></p>
            <p>Durant mon temps libre, je m'intéresse à tout ce qui touche à l'<span class="highlights">expérience utilisateur</span> et la psychologie qui découle des sciences cognitives afin d'appliquer ces concepts dans mes projets et proposer des expériences <span class="highlights">répondant aux besoins des utilisateurs</span>.</p>
            <p>À côté de ça, je m'intéresse aux dernières <span class="highlights">technologies</span>, à la <span class="highlights">photographie</span>, au <span class="highlights">cinéma</span> et aussi au <span class="highlights">sport</span>.</p>
          </div>
        </div>
        <Circles />
    </div>

    <Quote/>

    <!--
        <section>
        IMG SECTIOB
        </section>
    -->

    <ProfilePicture/>

    <SkillsContainer />

    <ExpContainer />

    <section class="contact_container col_lg">
        <h2>Alors, <br/> on discute ?</h2>
        <div class="contact_infos">
            <div class="">
              <a href="tel:+33629831174" class="contact_phone">06.29.83.11.74</a> <br/>
              <a href="mailto:antoine.cantoro@gmail.com" class="contact_mail">antoine.cantoro@gmail.com</a>
            </div>
            <div class="contact_social">
              <a href="https://dribbble.com/antoinecantoro_ui" target="_blank"><img src="~/static/svg/dribbble.svg" class="icon_social soc_dribbble"></a>
              <a href="https://www.instagram.com/antoine.cantoro_ui/" target="_blank"><img src="~/static/svg/instagram.svg" class="icon_social soc_instagram"></a>
              <a href="https://www.linkedin.com/in/antoine-cantoro-95443ab0/" target="_blank"><img src="~/static/svg/linkedin.svg" class="icon_social soc_linkedin"></a>
            </div>
            <img src="~/static/svg/antoinecantorologo.svg" class="contact_logo" loading="lazy">
        </div>
    </section>
  </div>
</template>

<script>
import Circles from '~/components/intro/circles.vue'
import Quote from '~/components/about/Quote.vue'
import SkillsContainer from '~/components/Skills/SkillsContainer.vue'
import ExpContainer from '~/components/Experience/ExpContainer.vue'

import ProfilePicture from '~/components/Home/ProfilePicture.vue'


import { gsap } from 'gsap'

export default {
  head () {
    return {
      title: 'Antoine Cantoro - UI & Web Designer',
    }
  },
  components: {
    SkillsContainer, Quote, ExpContainer, Circles, ProfilePicture
  },
  methods: {
    paragraphAppear: function(){
      
      let test = this.$refs.test
      console.log('ready', test)

      gsap.from(test, {y:10, duration:1})
    }
  },
  mounted() {
    this.paragraphAppear();
  },
  transition: {
    mode: "out-in",
    css: false,
    enter(el,done) {
        this.enteringPage(done);
        
    },
    leave(el,done) {
        this.leavingPage(done);
    }
  }
}
</script>

<style>
.intro_container {
    position: relative;
    margin-top: 40vh;
    padding: 0 30px;
}
.intro_container p {
    margin-bottom: 1em;
}

p {
  color: #dddddd;
  font-size: 1em;
  line-height: 1.5;
  letter-spacing: 1px;
}

p .highlights {
  font-weight: 500;
  text-decoration: underline;
}



.scroll_down_container {
  position: relative;
}

.scroll_down {
  display: none;
    text-transform: uppercase;
    font-family: 'Gilroy', sans-serif;
    font-weight: 500;
    font-size: 0.9em;
    position: absolute;
    left: -44px;
    top: 90px;
    transform: rotate(-90deg) translate(-50%);

    text-align: right;
    width: 110px;
}
.scroll_down::before {
  content: "";
  height: 1px;
  width: 80px;
  opacity: 0.1;
  background: #fff;

  position: absolute;
  left: 110%;
  top: 45%;
}
.scroll_down span {
  display: inline-block;
  width: 80px;
    position: relative;
    height: 1px;
    opacity: 0.1;
    background: #fff;
    top: -4px;
    margin-left: 16px;
}


/* SKILLS SECTION */
h2 {
  font-family: 'Gilroy', sans-serif;
  font-weight: 600;
}

/* CONTACT SECTION */
.contact_container {
    position: relative;
    overflow: hidden;
    padding: 0 30px 10em;
}

.contact_container h2 {
    font-size: 2em;
    font-family: 'Gilroy', sans-serif;
    font-weight: 600;
    padding-bottom: 1em;
}
.contact_container a {
    color: #fff;
    padding-bottom: 8px;
    text-decoration: none;
    display: inline-block;
    position: relative;

}
.contact_mail::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    opacity: 0.1;
    background-color: #d8d8d8;
    width: 100%;
    height: 2px;
}

.contact_logo {
    z-index: -1;
    opacity: 0.02;
    height: 240px;
    position: absolute;
    bottom: 25%;
    right: -50px;
}

.no_mobile {
    display: none;
}




/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) { 
  h1 {
    width: 70%;
    font-size: 2.75em;
    padding-bottom: 1em;
  }
  .intro_container {
    padding: 0 60px;
  }
  .paragraph_wrapper {
    width: 75%;
  }
  .intro_container p {
    line-height: 2;
  }

  .scroll_down {
    display: inline-block;
  }

  .flexbox {
    display: flex;
    justify-content: space-between;
  }

  .scroll_down_container {
    text-align: left;
  }



 

  /* CONTACT SECTION */

  .contact_container {
      padding: 0 60px 10em;
  }
  .contact_container h2 {
    font-size: 2.5em;
    padding-bottom: 0.4em;
  }
  .contact_phone,
  .contact_mail {
    font-size: 1.5em;
  }

  .contact_mail::before {
    bottom: -2px;
    height: 4px;
  }
  .contact_infos {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .contact_infos div {
    width: 50%;
  }
  .contact_social {
    display: inline-block;
    text-align: right;
    flex-direction: row;
  }

  .icon_social {
    height: 36px;
  }
  .soc_linkedin {
    height: 32px;
    position: relative;
    top: -2px;
   }
  .contact_social a:nth-child(2) {
    padding: 0 32px;
  }
  .contact_logo {
    height: 360px;
    top: 5%;
    right: -30px;
  }

}



@media (min-width: 1200px) { 

  /* INTRO */

  .intro_container {

    margin-top: 100px;}
  
  .intro_container h1 {
    padding-left: 16.666%;
    width: 66.666%;
    font-size: 3.75em;
    /*padding-top: 300px;*/}


  .intro_container .paragraph_wrapper {
    width: 58.333%;
    margin-right: 8.333%
  }



  /* CONTACT */
  .contact_mail::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    opacity: 1;
    background-color: #d8d8d8;
    width: 0%;
    height: 2px;

    transition: width 0.3s ease-out;
}

.contact_mail:hover::after {
  width: 100%;
}
.icon_social {
  transition: opacity 0.3s ease-out;
}

.icon_social:hover {
  opacity: 0.5;
}

  
}
</style>
