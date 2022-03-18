<!-- Cards  -->
<template>
  <div>
    <v-card class="mx-auto mt-12" max-width="344">

      <v-img :src="PersongeImpor.img" height="200px"></v-img>

      <v-card-title>{{ PersongeImpor.name }}</v-card-title>
    </v-card>
  </div>
</template>

<script>

export default {
  props: ["PersongeImpor"],
  data() {},
};
</script>

<!-- Style  -->
<style scoped>
.v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar)  {
  justify-content: center; 
  font-family: 'Montserrat', sans-serif;
  color: rgb(125, 107, 223);
  font-weight: bold;
  background-color: rgb(126, 185, 176);
}
</style>