<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>selamat datang di praxis</h1>
    <div class="img-tepi-kiri">
    <img :src="urlGambar" alt="praxis" style="width:30%" @click="gantiGambar">
    </div>
    <br/>
    <a href="https://praxisacademy.id" style="color:white">Ke Praxis</a>
    <h1>{{nama}}</h1>
    <button @click="gantiNama">ganti nama</button>
    <button @click="reverseNama">reverse nama</button>
    <!--  -->
    <h1>{{angka}}</h1>
    <button @click="angka+=1">tambah angka</button>
    <button @click="angka-=1">kurang angka</button>
    <p>mobil
    <ul v-for="(mobil, index) in mobils" :key="index">
      <li>{{mobil}}</li>
    </ul>
    </p>
    
    <p>motor {{motor.merk}}, jumlah {{motor.jumlah}}</p>

    <hr>
    <h2>profileku menggunakan computed</h2>
    <p>{{profile}}</p>
  </div>
</template>


<script>
export default {
  name: 'App',
  data: ()=>{
    return{
      angka: 0,
      urlGambar: "",
      urlGambarResource: [
        "https://praxisacademy.id/img/praxisnew.png",
        "https://laracasts.s3.amazonaws.com/series/thumbnails/learning-vue-2-step-by-step.png",
        "https://avatars2.githubusercontent.com/u/22138497?s=200&v=4",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
        ],
      isgantiGambar: true,
      nama: "Lambok",
      mobils: ['honda', 'toyota', 'mazda'],
      motor: {
        merk: "beat",
        jumlah: 1
      }
    }
  },
  computed:{
    profile: function(){
      let profile = `namaku ${this.nama}, mobilku ${this.mobils}, motorku ${this.motor.merk} berjumlah ${this.motor.jumlah} buah`
      return profile
    }
  },
  methods:{
    gantiNama(){
      this.nama = "michael"
    },
    reverseNama(){
      this.nama =this.nama.split("").reverse().join("");
    },
    gantiGambar(){
      let findUrl = this.urlGambarResource.findIndex(el => el === this.urlGambar)
      console.log(findUrl)
      if(findUrl === -1){
        this.urlGambar = this.urlGambarResource[0]
      }
      if(findUrl === this.urlGambarResource.length-1){
        this.urlGambar = this.urlGambarResource[0]
      }else{
        this.urlGambar = this.urlGambarResource[findUrl+1]
      }
    },
  },
  created(){
    console.log(this.urlGambarResource.length-1)
    let numberRandom = Math.floor(Math.random() * (this.urlGambarResource.length-1)) + 0
    console.log(numberRandom)
    this.urlGambar = this.urlGambarResource[numberRandom]
    setInterval(this.gantiGambar, 700)
  }
}
</script>

<style>
body{
  background-color:black;
}
#app {
  background-color: black;
  text-align: center;
  color: white
}

.hello{
  background-color:white;
  color:black;
}

</style>
