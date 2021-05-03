<template>
  <div class="container">
    <section class="col_lg project_header">
        <h1>Static Swim</h1>
        <div class="flex_container">
            <div class="scroll_indication">
                <div class="scroll_down">Scroll down</div>
            </div>
            <div class="project_information">
                <div class="info_item"> 
                    <h2>Mission</h2>
                    <ul>
                        <li>Interface Utilisateur</li>
                        <li>Conception e-Commerce</li>
                        <li>Développement Front-End</li>
                    </ul>
                </div>
                <div class="info_item"> 
                    <h2>Année</h2>
                    <span>2016</span>
                </div>
                <div class="info_item"> 
                    <h2>Site Web</h2>
                    <a href="https://staticswim.com">staticswim.com/</a>
                </div>
            </div>
            <div class="project_recap">
                <p>Basée en France, la société Static Swim propose à la vente des équipements sportifs pour la nage, conçus et fabriqués en France.</p>
                <p>Du Paris Saint-Germain au Stade Toulousain, de nombreuses structures professionnelles font confiance aux produits conçus par la marque.</p>
            </div>
        </div>
    </section>

    <FirstImage :photoUrl="mainImg" />

    <section class="paragraph_container col_lg first_paragraph_container">
        <p>La plateforme web de Static Swim était vieillissante, que ce soit technologiquement parlant ou en matière de design et d’interactivité, c’est pourquoi il décidé de réaliser une refonte complète. L’objectif de cette refonte fût de proposer une expérience digitale égale à la qualité intrinsèque du produit.</p>
        <p>Pour réaliser la refonte de la plateforme e-commerce, nous avons pris la décision de passer sous le CMS Prestashop, du fait de sa facilité d’intégration et de ses nombreuses fonctionnalités facilitant la gestion des produits et des ventes.</p>
    </section>

    <BlockQuote :quote="quote" />

    <section class="paragraph_container col_lg second_paragraph_container">
        <p>La mission de refonte complète a duré 5 mois, durant lesquels nous avons eu la possibilité de concevoir une nouvelle interface et de l’améliorer en réalisant plusieurs itérations selon les retours et remarques collectés.</p>
        <p>La contrainte principale fût de réussir à proposer une navigation simple présentant à la fois la concept et les nombreuses configurations/applications possibles du produit.</p>
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

import transition from '~/mixins/transition.js';

export default {
  mixins: [transition],
  head () {
    return {
      title: 'Static Swim • Antoine Cantoro',
    }
  },
  data() {
        return {
            quote: "Proposer une expérience digitale égale à la qualité du produit.",

            nextProjectName: "La Nuit Digitale",
            nextProjectLink: "/projects/nuitDigitale",

            mainImg: "/img/staticswim/visu1.jpg",

            images: [
                { imgUrl: '/img/staticswim/visu1.jpg', style: "img1" },
                { imgUrl: '/img/staticswim/visu2_v.jpg', style: "img2" },
                { imgUrl: '/img/staticswim/visu3.jpg', style: "img3" },
                { imgUrl: '/img/staticswim/visu1.jpg', style: "img4" },
            ]
            
        }
    },
  components: {
    FirstImage, BlockQuote, ProjectPhoto, ProjectImages, NextProject
  },
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
