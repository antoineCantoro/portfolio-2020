<template>  
    <section class="NextProject_Container">
        <nuxt-link :to="nextProjectLink" class="NextProject_Link">
            <span class=" NextProject_Title">{{nextProjectName}}</span>
            <span class=" NextProject_Button">Projet Suivant -></span>
        </nuxt-link>
    </section>
</template>

<script>
export default {
    props: 
        ['nextProjectLink', 'nextProjectName']
    ,
}
</script>

<style lang="scss">
.NextProject_Container {
    margin: 5em 0;
    padding: 0 30px;

    .NextProject_Link {
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .NextProject_Title {
        font-family: 'Gilroy', sans-serif;
        font-size: 2em;
        font-weight: 600;
        padding-bottom: 0.4em;}

    .NextProject_Button {
        font-size: 0.8em;
        opacity: 0.6;}
}

@media (min-width: 768px) { 
    .NextProject_Container {
        margin: 7em 0;
    
        .NextProject_Title {
            font-size: 3em;}

        .NextProject_Button {
            font-size: 1em;}
    }
}

@media (min-width: 1200px) {
    .NextProject_Container {
        margin: 15em 0;
    
        .NextProject_Title {
            font-size: 5em;}
    }
}
</style>