<template>
    <div>
        <h4>Voici la Page2</h4>
        <div v-on:click="goDebut" class="btn btn-warning">Retour au début</div>
    </div>
    
    
</template>

<script>
    export default {
        name:"Pa_ge2",
        methods: {
            goDebut: function(){
                this.$router.push('/')
            }
        }
    }
</script>

<style>

</style>

