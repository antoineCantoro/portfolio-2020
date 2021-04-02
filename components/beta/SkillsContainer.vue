<template>  
    <section class="skills_container col_lg">
        <h2>Compétences.</h2>
        <div class="skills_list">
            <SkillItem 
                v-for="item in skills" 
                :key="item.title" 
                :name="item.title" 
                :svgId="item.svgId"
                :desc="item.desc"
                :listSkills="item.listSkills"
            />
        </div>
    </section>
</template>

<script>
import SkillItem from '~/components/beta/SkillItem.vue'

export default {
    data() {
        return {
            skills: [
            {
                title: 'UX Design',
                //svgId: 'lf20_gVmlAm',
                svgId: 'circles',
                desc: 'Comprendre les utilisateurs et leurs besoins, analyser l\'existant et mener des recherches d\'amélioration du produit.',
                listSkills: ['User Research','User Journey','Experience Map'],
            },
            {
                title: 'Interaction Design',
                //svgId: 'lf20_svrv72',
                svgId: 'cube',
                desc: 'De la conception de wireframes à la finalisation d\'interfaces digitales, en passant par la réalisation de prototypes.',
                listSkills: ['Wireframes','Prototyping','Design System'],
            },
            {
                title: 'Developpement',
                //svgId: 'lf20_nf8bpV',
                svgId: 'pyramid',
                desc: 'Intégration des interfaces digitales et développement des fonctionnalités selon l\'approche du mobile-first.',
                listSkills: ['HTML / SCSS / JS','Vue.Js / Git / Npm','WordPress'],
            },
            ]
        }
    },
    components: {
        SkillItem
    },
    mounted() {
    }
}
</script>

<style lang="scss">

.skills_container {
  padding: 0 30px;
  
  h3 {
    font-family: 'Gilroy', sans-serif;
    font-size: 1.2em;
    font-weight: 600;}
}
.skills_container p {
  letter-spacing: 0.5px;
  font-size: 1em;
  opacity: 0.5;
  padding: 1em 0 1.5em;
}
.skills_container ul {
  padding: 0;
}
.skills_container li {
  font-size: 0.9em;
  margin: 1rem 0;
  list-style-type: none;
}
.skills_container li::before {
    content: "";
    width: 24px;
    height: 1px;
    opacity: 0.13;
    background: #fff;
    display: inline-block;
    margin-right: 20px;
}
.skills_container li:first-child {
    margin-top: 0;
}
.skill_item {
    padding-top: 5em;
}
.skill_icon {
    width: 5em;
    height: 5em;
    margin-bottom: 1.5em;
}


/* Medium devices */
@media (min-width: 768px) { 
    .skills_container {
        padding: 0 60px;
    }
    .skills_container h2 {
        font-size: 3em;
        padding-bottom: 1.2em;
    }
    .skill_item:first-child {
        padding-top: 0px;
    }
    .skill_icon {
        width: 7.5em;
        height: 7.5em;
        margin-bottom: 1.5em;
    }
    .skills_container h3 {
        font-size: 2em;
    }
    .skills_container p {
        font-size: 1.15em;
        width: 60%;
    }
    .skills_container li {
        font-size: 1.25em;
    }
}

@media (min-width: 1200px) { 
    .skills_container {
        padding-bottom: 8em;

        h2 {
            width: 100%;
            padding-bottom: 1.5em;}

        p {
            width: 100%;}
    }

    .skills_list {
        display: flex;
    }

    .skill_item {
        width: 33.333%;
        padding-top: 0;
        padding-right: 20px;
    }

}
</style>