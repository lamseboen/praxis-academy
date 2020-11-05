<template>
  <v-app>
    <v-navigation-drawer app color="blue-grey" v-if="drawer">
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
        <v-list-item  to="/">
          <v-list-item-icon>
            <v-icon class="green--text">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="green--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  to="/about">
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  to="/address">
          <v-list-item-icon>
            <v-icon>mdi-tag</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Address</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="indigo">
      <!-- -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
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
    drawer: true
  }),
};
</script>
