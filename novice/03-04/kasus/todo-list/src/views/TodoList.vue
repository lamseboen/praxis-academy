<template>
    <div>
        <input type="text" v-on:keyup.enter="tambahAktivitas" v-model="aktivitasTemp">
        <!-- <input type="text" :value="aktivitasTemp"> -->
        <button @click="tambahAktivitas">add</button>
        <table border="1">
            <tr>
                <th>Jam Input</th>
                <th>Aktivitas</th>
                <th>actions</th>
            </tr>
            <tr v-for="(todo, index) in todos" :key="index">
                <td>{{todo.jam}}</td>
                <td >
                    <input type="text"   v-if="editWho === index"  v-model="todo.aktivitas">
                    <span @click="changeEl(index)" v-if="editWho !== index" >{{todo.aktivitas}}</span>
                </td>
                <td><button @click="hapusAktivitas(index)">Delete</button> 
                <button  @click="editWho=false" >Update</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            todos:[
            ],
            aktivitasTemp: "",
            editWho:false
        }
    },
    methods:{
        tambahAktivitas: function (){
            if(this.aktivitasTemp === "") return false 
            let temp= {
                jam: new Date(),
                aktivitas: this.aktivitasTemp
            }
            this.todos.push(temp)
            this.aktivitasTemp = ""
        },
        hapusAktivitas: function(index){
            this.todos = this.todos.filter((el, idx)=>{
                return index !== idx
            })
        },
        changeEl: function(idx){
            this.editWho = idx
        }
    }
}
</script>

<style>

</style>