<template>
  <div class="container project_container">
    <section class="col_lg project_header">
        <h1>Ace Global Services</h1>
        <div class="flex_container">
            <div class="scroll_indication">
                <div class="scroll_down">Scroll down</div>
            </div>
            <div class="project_information">
                <div class="info_item"> 
                    <h2>Mission</h2>
                    <ul>
                        <li>Interface Utilisateur</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
                <div class="info_item"> 
                    <h2>Année</h2>
                    <span>2017</span>
                </div>
                <div class="info_item"> 
                    <h2>Site Web</h2>
                    <a href="https://www.ace-gs.com/">ace-gs.com/</a>
                </div>
            </div>
            <div class="project_recap">
                <p>Localisé à Boulogne-Billancourt, dans la région parisienne, la société ACE Global Business Services propose depuis plus de 25 ans des solutions dans la bureautique et l’informatique.</p>
            </div>
        </div>
    </section>

    <FirstImage :photoUrl="mainImg" />

    <section class="paragraph_container col_lg first_paragraph_container">
        <p>Mon arrivée au sein de l'entreprise m'a permis de découvrir à la fois un nouvel univers professionnel, et m'a également donné la possibilité d'évoluer au sein d'une société dans contexte qui fût inédit pour moi: la vie au sein d'une entreprise en gestion d'acquisiton.</p>
        <p>C’est ainsi que j’ai eu l’occasion de travailler pendant une année sur la refonte complète du site web Ace Global Business, qui était fortement désuet et qui ne correspondait plus à l’image et aux ambitions du groupe. Souhaitant mettre en avant cette fusion, il était nécessaire de présenter les solutions proposées par cette entreprise et également les nouvelles offres et les nouveaux services apportés par cette fusion.</p>
    </section>

    <BlockQuote :quote="quote" />

    <section class="paragraph_container col_lg second_paragraph_container">
        <p>Afin de proposer une expérience la plus complète possible, il a été choisi d’accompagner le visiteur en lui présentant de la façon la plus pédagogique et complète possible chaque solutions et services proposés par Ace Gbs. Avec un long travail de rédaction, de synthétisation et d'illustration, nous avons mis en place une plateforme qui sensibilise sur l'ensemble des solutions du groupe.</p>
        <p>Lorsque les maquettes furent validées, elles furent par la suite transmises à cette agence, qui était chargé de leur intégration et de développer les différentes fonctionnalités. Une étroite coopération s'est donc naturellement installée afin de proposer un produit final correspondant à nos attentes et exigeances.</p>
    </section>

    <section class="img_mozaic_container col_lg">
        <ProjectImages
            v-for="img in images"
            :key="img.imgUrl"
            :class="img.style"

            :imgSrc="img.imgUrl"
        />
    </section>

    <NextProject :nextProjectLink="nextProjectLink" :nextProjectName="nextProjectName"/>

  </div>
</template>

<script>
import FirstImage from '~/components/SingleProject/FirstImage.vue'
import BlockQuote from '~/components/SingleProject/BlockQuote.vue'
import ProjectPhoto from '~/components/intro/ProjectPhoto.vue'
import ProjectImages from '~/components/SingleProject/ProjectImages.vue'
import NextProject from '~/components/SingleProject/NextProject.vue'

export default {
  head () {
    return {
      title: 'Ace Global Business • Antoine Cantoro',
    }
  },
  data() {
        return {
            quote: "Présenter de façon simple et pédagogique l’ensemble des solutions proposées par l’entreprise.",
            
            nextProjectName: "Static Swim",
            nextProjectLink: "/projects/staticSwim",

            mainImg: "/img/acegbs/visu1.jpg",

            images: [
                { imgUrl: '/img/acegbs/visu1.jpg', style: "img1" },
                { imgUrl: '/img/acegbs/visu2_v.jpg', style: "img2" },
                { imgUrl: '/img/acegbs/visu3.jpg', style: "img3" },
                { imgUrl: '/img/acegbs/visu1.jpg', style: "img4" },
            ]

        }
    },
  components: {
    FirstImage, BlockQuote, ProjectPhoto, ProjectImages, NextProject
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

<style lang="scss" scoped>
.project_header {

    h1 {
        margin: 1em 0;
        padding: 0 30px;}

    .scroll_indication {
        display: none;
        position: relative;
    }
}
@media (min-width: 768px) { 
    .project_header {

         .info_item {
             h2, ul, a, span {
                display: inline-block;
                
             }
             ul {
                vertical-align: text-top;
             }

             h2 {
                width: 10%;
             }
         }
    }
}

@media (min-width: 1200px) { 
    .project_header {

        h1 {
            font-size: 4em;
            width: 100%;
            display: block;
            padding: 0 16.333%;}

        .flex_container {
            display: flex;
            flex-direction: row;
        }

        .scroll_indication {
            display: block;
            width: 8.333%;
            order: 1;
        }

        .project_information {
            width: 33.333%;
            order: 3;
            padding: 0;
            margin: 0;
            

            h2 {
                width: 25%;
            }
        }

        .project_recap {
            order: 2;
            padding: 0;
            width: 33.333%;
            margin: 0 8.333%;

            p {
                letter-spacing: 2px;
            }
        }
        .info_item:first-child {
            margin-top: 0;
        }
         
    }  
}



.project_information {
    padding: 0 30px;

    div {
        margin: 2em 0;
    }

    h2 {
        font-size: 1.2em;
        margin-bottom: 0.5em;}

    span {
        font-size: 1em;}

    ul {
        padding: 0;
        li {
            list-style-type: none;
            margin-bottom: 0.5em;}
    }

    a {
        color: #fff;
    }
}

.project_recap {
    margin: 4em 0;
    padding: 0 30px;
}



.paragraph_container {
    padding: 0 30px;
    margin: 4rem 0;
}
@media (min-width: 768px) { 
    .paragraph_container {
        margin: 8em auto;
        padding: 0 60px;
        
        p {
            line-height: 2;
            letter-spacing: 1px;
        }
    }

    .first_paragraph_container {
        p {
            padding-left: 16.666%;
        }
    }

    .second_paragraph_container {
        p {
            padding-left: 8.333%;
            padding-right: 16.666%;
        }
    }

}

@media (min-width: 1200px) {
    .paragraph_container {
        margin: 10em auto;
        padding: 0;

        p {
            font-size: 1.25em;
        }
    }

    .first_paragraph_container {

        
        p{
            padding-left: 33.333%;
            padding-right: 16.666%;
         }
    }

    .second_paragraph_container {
        p {
            margin-left: 0;
            width: 100%;
            padding-right: 33.333%;
            padding-left: 16.666%;
        }
    }
}


p {
    font-size: 1em;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 2em !important;
}


.project_cover_container {
    width: 100%;
    padding-right: 30px;
    margin: 4em 0;

    img { width: 100%;}
}
@media (min-width: 768px) { 
    .project_cover_container {
        width: 100%;
        padding-right: 4em;}
}
@media (min-width: 1200px) {
    .project_cover_container {
        padding-right: 20em;
        margin: 8em 0;}
}


.img_mozaic_container {
    padding: 30px;
}
.img_mozaic {
    margin: 30px 0;
}
</style>
