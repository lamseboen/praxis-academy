<template>
  <v-app>
    <v-app-bar app class="indigo">
      <!-- -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="yellow--text">MATERIAL DESIGN</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>


    <v-navigation-drawer app color="blue-grey" v-model="drawer">
      <!-- -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> E-Learning </v-list-item-title>
          <v-list-item-subtitle>
            la la la <label for=""></label>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon class="green--text">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="green--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/address">
          <v-list-item-icon>
            <v-icon>mdi-tag</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Address</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
        <v-row>
          <v-col cols="9" xs="12">
            <v-card class="pa-2"> one of three columns </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="pa-2"> one of three columns </v-card>
          </v-col>
        </v-row>
        <v-row :align="align" no-gutters style="height: 150px">
          <v-col v-for="n in 3" :key="n">
            <v-card class="pa-2" outlined tile> One of three columns </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer  padless="true" fixed>
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
    drawer: false,
  }),
};
</script>
