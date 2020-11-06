<template>
  <div class="home">
    <h1>this is home page</h1>
    <h1>{{num}}</h1>
    <v-btn color="info" fab @click="tambahNumber"><v-icon>mdi-plus</v-icon></v-btn>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data:()=>({
    number: 0
  }),
  computed: {
    num: function(){
      return this.$store.state.num
    }
  },
  methods:{
    tambahNumber:function(){
      this.$store.dispatch('aNum')
    }
  }

}
</script>
