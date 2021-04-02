<template>  
    <section class="ExperienceContainer col_lg">
        <h2 class="ExperienceTitle">Expérience.</h2>
        <div class="ExperienceList">
            <ExpItem 
                v-for="exp in experiences" 
                :key="exp.years"
                :jobName="exp.jobName"
                :companyName="exp.companyName"
                :years="exp.years"
                />
        </div>
    </section>
</template>

<script>
import ExpItem from '~/components/Experience/ExpItem.vue'

export default {
    data() {
        return {
            experiences: [
                {jobName: 'Front-End Developer', companyName: 'BigBump Agency', years: '2021'},
                {jobName: 'UI Designer', companyName: 'BVA', years: '2018 - 2019'},
                {jobName: 'Web Designer', companyName: 'Ace GBS', years: '2017 - 2018'},
                {jobName: 'Web Designer', companyName: 'Static Swim', years: '2016'},
                {jobName: 'Graphic Designer', companyName: 'La Mêlée', years: '2015'},
            ]
        }
    },
    components: {
        ExpItem,
    },
}
</script>

<style lang="scss">
.ExperienceContainer {
    padding: 9em 30px;

    .ExperienceTitle {
        padding-bottom: 1em;}
}



@media (min-width: 768px) { 
    .ExperienceContainer {
        padding: 9em 60px;

        .ExperienceTitle {
            font-size: 3em;
            padding-bottom: 1.2em;}
        
        .ExperienceList {
            width: 75%;
            margin-left: 25%;}
    }
}

@media (min-width: 1200px) { 
    .ExperienceContainer {
        padding-bottom: 18em;

        .ExperienceTitle,
        .ExperienceList {
            width: 66.666%;
            margin-left: 33.333%;}

    }
}

</style>