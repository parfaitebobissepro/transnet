<template>
  <div class="mb-5 text-center">
    <BANNERFO></BANNERFO>
    <h1 v-if="error.statusCode === 404">404 Page Non Trouvé</h1>
    <h1 v-else>An error occurred <br> {{ error }}</h1>
    Retour à L'<NuxtLink to="/" style="font-weight: 600; color: #006db7">Accueil</NuxtLink>
  </div>
</template>

<script>
import BANNERFO from "../components/bannerFo.vue";

  export default {
    props: ['error'],
    layout: 'frontLayout', // you can set a custom layout for the error page
    components: {
      BANNERFO,
    },
  }
</script>