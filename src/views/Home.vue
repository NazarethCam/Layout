<template>
  <div>
    <Nav></Nav>
    <v-container>
      <v-row>
        <v-col
          lg="4"
          md="6"
          sm="12"
          v-for="(personge, index) in Personges"
          :key="index"
        >
          <Card :PersongeImpor="personge"></Card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Card from "../components/Cards.vue";
import Personges from "../../personges";

export default {
  data() {
    return {
      Personges: Personges,
    };
  },
  components: {
    Nav,
    Card,
  },
};
</script>

<style scoped>
v-row {
  margin-top: 0.5rem;
}
</style>