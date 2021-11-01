<template>
  <div class="container-propositions">
    <span v-if="item.properties.country != undefined"
      >{{ item.properties.country }},</span
    >
    <span v-if="item.properties.state != undefined">{{ item.properties.state }},</span>
    <span v-if="item.properties.city != undefined">{{ item.properties.city }},</span>
    <abbr v-if="item.properties.name != undefined">{{ item.properties.name }}</abbr>
  </div>
</template>

<script>
export default {
  name: "ItemTemplate",
  props: {
    item: { required: true },
    searchText: { required: true },
  },
};
</script>
<style>
.v-autocomplete .v-autocomplete-list {
  z-index: 9999;
  width: 100% !important;
  max-width: 100% !important;
}

.container-propositions {
  z-index: 9999;
  background: #006db7;
  width: 100% !important;
  max-width: 100% !important;
  display: block;
  position: relative;
  font-size: 15px;
  color: #fff;
  padding: 5px 15px;
  border-bottom: 1px solid rgba(248, 248, 248, 0.575);
}

.container-propositions span {
  color: #fff;
}
</style>
