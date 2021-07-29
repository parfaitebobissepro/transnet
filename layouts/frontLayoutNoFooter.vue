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

