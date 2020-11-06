<template>
  <div>
    <v-row>
      <v-col cols="5">
        <v-list>
          <v-list-item v-for="task in tasks" :key="task.id">
              <v-list-item-icon>
                  <v-icon>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{task.title}}</v-list-item-title>
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
    tasks: [],
  }),
  methods: {
    getDataUser: async function () {
      const getData = await axios.get(
        "http://192.168.1.26:3000/tasks"
      );
      const { data } = await getData;
      this.tasks = data;
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