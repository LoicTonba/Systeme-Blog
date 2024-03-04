<template>
    <div>
        <h1>Le post numéro {{ id }}</h1>
        <div>
            <h2>{{ this.articleUnique.title }}</h2>
            <br>
            <p>
                {{ this.articleUnique.body }}
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
  created () {
  },
        name:"Po_st",
        data(){
            return {
                id: this.$route.params.id,
                articleUnique: []
            }
        },
        mounted(){
            axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            .then(reponse => {
               // console.log(reponse);
               this.articleUnique = reponse.data
            })
        }

    }
</script>

<style>

</style>

