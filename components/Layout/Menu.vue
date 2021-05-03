<template>
  <section id="menu_container">
      <nuxt-link to="/">
        <img src="~/static/svg/antoinecantorologo.svg" class="menu_logo" loading="lazy">
      </nuxt-link>
      <div class="menu_links">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/projects">Projets</nuxt-link>
      </div>
  </section>
</template>
<style>
#menu_container {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu_logo {
    height: 2em;
}

.menu_links a {
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  padding-left: 1em;
}

@media (min-width: 1200px) { 
    #menu_container {
      padding: 60px;
    }
}
</style>
