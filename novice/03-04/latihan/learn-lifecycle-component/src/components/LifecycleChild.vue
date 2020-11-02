<template>
  <div>
      <h1>Hello World</h1>
      <p v-if="life === 'life cycle'">{{life}}</p>
      <input type="text" v-model="life">
      <button @click="life = 'halo halo aja'">Update</button>
  </div>
</template>

<script>
export default {
    data: () =>{
        return {
            life: "life cycle"
        }
    },
    beforeCreate(){
        alert(this.life + " before created")
    },
    created(){
        alert(this.life +" created")
    },
    beforeMount(){
        alert(this.life + " before mounted")
    },
    mounted(){
        alert(this.life + " mounted")
    },
    beforeUpdate(){
        alert(this.life+' before updated')
    },
    updated(){
        alert(this.life + ' updated')
    },
    beforeDestroy(){
        alert(this.life + ' before destroyed')
    },
    destroyed(){
        alert(this.life + ' destroyed')
    }
}
</script>

<style>

</style>