<template>  
    <section class="SkillsContainer col_lg">
        <h2 class="SkillsTitle">Compétences.</h2>
        <div class=" SkillList">
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
import SkillItem from '~/components/Skills/SkillItem.vue'

export default {
    data() {
        return {
            skills: [
                {
                    title: 'UX Design',
                    svgId: 'circles',
                    desc: 'Comprendre les utilisateurs et leurs besoins, analyser l\'existant et mener des recherches d\'amélioration du produit.',
                    listSkills: ['User Research','User Journey','Experience Map'],
                },
                {
                    title: 'Interaction Design',
                    svgId: 'cube',
                    desc: 'De la conception de wireframes à la finalisation d\'interfaces digitales, en passant par la réalisation de prototypes.',
                    listSkills: ['Wireframes','Prototyping','Design System'],
                },
                {
                    title: 'Developpement',
                    svgId: 'pyramid',
                    desc: 'Intégration des interfaces digitales et développement des fonctionnalités selon l\'approche du mobile-first.',
                    listSkills: ['HTML / SCSS / JS','Vue.Js / Git / Npm','WordPress'],
                },
            ]
        }
    },
    components: {
        SkillItem,
    },
}
</script>

<style lang="scss">
.SkillsContainer {
    padding: 0 30px;
}

@media (min-width: 768px) { 
    .SkillsContainer {
        padding: 0 60px;

        .SkillsTitle {
            font-size: 3em;
            padding-bottom: 1.2em;}
    }
}

@media (min-width: 1200px) { 
    .SkillsContainer {
        padding-bottom: 8em;

        .SkillsTitle {
            width: 100%;
            padding-bottom: 1.5em;}

        .SkillList {
            display: flex;}
    }    
}
</style>