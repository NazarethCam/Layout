<!-- Navbar  -->
<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mi App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn>Inicio</v-btn>
        <v-btn>Buscar</v-btn>
        <v-btn>Acerca de</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item :to ="{path: '/'}">
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          <v-list-item :to ="{path:'/buscar'}">
            <v-list-item-title>Buscar</v-list-item-title>
          </v-list-item>
          <v-list-item :to ="{path:'/acercaDe'}">
            <v-list-item-title>Acerca de</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>

<!-- Style  -->

<style scoped>
.v-btn:not(.v-btn--round).v-size--default, .v-list-item--dense .v-list-item__title, .v-list-item--dense .v-list-item__subtitle, .v-list--dense .v-list-item .v-list-item__title, .v-list--dense .v-list-item .v-list-item__subtitle  {
  font-weight: bold;
  color: rgb(125, 107, 223);
}

.v-toolbar__title {
  color:rgb(125, 107, 223);
}

.v-list-item-group .v-list-item--active, .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled), .mdi-menu::before {
    color: rgb(126, 185, 176);
}
</style>