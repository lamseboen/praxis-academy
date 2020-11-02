<template>
  <div id="app">
    <greeting :sayHi="halo"/>
    <!-- <Cangka v-on:tambah="tambahNilai"/> -->
    <!-- <button @click="tambahNilai">Tambah Nilai</button> -->
    <!-- <button @click="kurangNilai">Kurang Nilai</button> -->
  </div>
</template>

<script>
import Greeting from './components/Greeting'
// import Cangka from './components/Cangka'
export default {
  name: 'App',
  data(){
    return{
      halo: 'Halo Dunia ini'
    }
  },
  components: {
    Greeting: Greeting,
    // Cangka
  },
  methods: {
    tambahNilai(){
    
    },
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
