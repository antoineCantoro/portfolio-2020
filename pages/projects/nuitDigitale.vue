<template>
  <div class="container">
    <section class="col_lg project_header">
        <h1>La Nuit Digitale</h1>
        <div class="flex_container">
            <div class="scroll_indication">
                <div class="scroll_down">Scroll down</div>
            </div>
            <div class="project_information">
                <div class="info_item"> 
                    <h2>Mission</h2>
                    <ul>
                        <li>Identité de marque</li>
                        <li>Supports Print</li>
                    </ul>
                </div>
                <div class="info_item"> 
                    <h2>Année</h2>
                    <span>2015</span>
                </div>
                <div class="info_item"> 
                    <h2>Site Web</h2>
                    <a href="https://meleenumerique.com">meleenumerique.com/</a>
                </div>
            </div>
            <div class="project_recap">
                <p>Depuis presque 20 ans, l’association La Mêlée organise, dans le cadre de l’Homo Numéricus, la Mêlée Numérique, un des événements forts de la région toulousaine. </p>
                <p>Au programme, de nombreuses conférences, ateliers ou encore tables rondes autour de diverses thématiques autour de la transformation digitale et ses possibilités dans l’économie.</p>
            </div>
        </div>
    </section>

    <!--
    <section class="project_cover_container">
        <img src="~/static/img/nuitdigitale/visu1.jpg">
    </section>
    -->

    <FirstImage :photoUrl="mainImg" />


    <section class="paragraph_container col_lg first_paragraph_container">
        <p>Pendant deux mois, j’ai eu la chance de travailler dans l’association La Mêlée pour la préparation de l’édition 2015 de la Mêlée Numérique, notamment sur la partie graphisme, afin d’apporter mes connaissances et mon savoir faire pour la réalisation de divers supports pour cet événement.</p>
        <p>Dans le cadre de cette édition, les organisateurs souhaitaient proposer une soirée qui aurait pour but de promouvoir les possibilités créatives du digital, le tout dans un ambiance festive et décontractée: c’est ainsi que La Nuit Digitale fût créée. Il fût donc nécessaire de créer un univers graphique à cet événement, ce qui prenait en compte la réalisation d’un logo, du choix des couleurs ou encore de la réalisations des divers supports de communication (flyer, stickers, rollup, vidéo).</p>
    </section>

    <BlockQuote :quote="quote" />

    <section class="paragraph_container col_lg second_paragraph_container">
        <p>La mission était donc de réussir à proposer une ambiance et un univers graphique représentant à la fois le côté digital et le côté art de l’événement. De là naquit, suite au travail de l’ensemble de l’équipe, ce logo à l’image du modernisme et de l’aspect digital de l’évènement, avec des formes simples et un logo facilement reconnaissable.</p>
        <p>L’univers graphique se concentre autour des possibilités graphiques et artistiques offertes par le numérique, notamment traduis par l’utilisation d’éléments graphiques obtenus à partir de rendus des logiciel de 3D qui symbolise cette possibilité créative que l'outil digital peut nous apporter.</p>
    </section>

    <section class="img_mozaic_container col_lg">
       <video controls class="img4 video" controlsList="nodownload">
        <source src="~/static/video/La_Nuit_Digitale_2015_Teaser.webm"
                type="video/webm">
        <source src="/static/video/La_Nuit_Digitale_2015_Teaser.mp4"
                type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
        </video>
        <span class="videoCredit">Crédit: Bastien Rigaud</span>
    </section>

    <section class="paragraph_container col_lg first_paragraph_container">
        <p>Cette édition 2015 de la Mêlée Numérique fût une réussite et cet événement annuel de la région toulousaine ne cesse de grandir d’année en année, passant d’un événement qui durait initilament 3 jours, et qui se déroule désormais sur une semaine entière.</p>
        <p>De mon côté, cette expérience fût fortement bénéfique car elle m'a permis de découvrir à la fois le milieu associatif en travaillant avec la Mêlée, de découvrir l'esprit de partage et d'échange qu'il peut y avoir en évoluant au cœur d'un espace de co-working et d'attiser ma culture technologique au travers des divers événements organisées durant ce festival numérique.</p>
    </section>

    <NextProject  :nextProjectLink="nextProjectLink" :nextProjectName="nextProjectName"/>

  </div>
</template>

<script>
import FirstImage from '~/components/SingleProject/FirstImage.vue'
import BlockQuote from '~/components/SingleProject/BlockQuote.vue'
import ProjectPhoto from '~/components/intro/ProjectPhoto.vue'
import NextProject from '~/components/SingleProject/NextProject.vue'

export default {
  head () {
    return {
      title: 'La Nuit Digitale • Antoine Cantoro',
    }
  },
  data() {
        return {
            quote: "Une soirée dynamique et connectée qui doit promouvoir et mettre en avant les possibilités artistiques du digital.",
            
            nextProjectName: "Ace Global Service",
            nextProjectLink: "/projects/aceGbs",

            mainImg: "/img/nuitdigitale/visu1.jpg",
        }
    },
  components: {
    FirstImage, BlockQuote, ProjectPhoto, NextProject
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


.video {
    width: 100%;
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


.videoCredit {
    display: block;
    text-align: right;
    padding: 1em 0 0;
}
</style>
