<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Lifecycle v-if = "type"/>
    <button @click="type = !type">Destroy</button>
  </div>
</template>

<script>
import Lifecycle from './views/Lifecycle'
export default {
  name: 'App',
  data(){
    return{
      type : true
    }
  },
  components: {
    Lifecycle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
