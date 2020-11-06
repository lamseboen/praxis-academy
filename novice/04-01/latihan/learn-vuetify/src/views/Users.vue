<template>
  <div>
    <v-row>
      <v-col cols="5">
        <v-list>
          <v-list-item v-for="user in users" :key="user.id">
              <v-list-item-icon>
                  <v-icon>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title >{{user.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    users: [],
  }),
  methods: {
    getDataUser: async function () {
      const getData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const { data } = await getData;
      this.users = data;
      console.log(this.users);
    },
  },
  created() {
    this.getDataUser();
    // console.log(this.users)
  },
};
</script>

<style>
</style>