<template>
  <div>
    <HEADERFO></HEADERFO>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>

import Vue from "vue";
import HEADERFO from "../components/headerFo.vue";

export default {
  name:'frontLayoutNoFooter',
  components: {
      HEADERFO,
  },
}
</script>
<style>
.header-style01 .navbar-default .navbar-nav>li>a:hover, .header-style01 .nav > li > a.current-menu-item{
  border-color: #006db7;
}

.error {
  color: #fc7b7b !important;
}
</style>

