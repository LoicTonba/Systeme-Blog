<template>
    <div>
        <ul class="nav ">
            <li class="btn btn-primary btn-nav"><router-link to="/" exact>Accueil</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/page1">Page 1</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/page2">Page 2</router-link></li>

            <page2></page2>
        </ul>
    </div>
</template>

<script>
import Page2 from './Page2.vue';
    export default {
        name:"Hea_der",
        component: {
            'page2':Page2
        }

    }
</script>

<style scoped>
    .btn-nav {
        margin: 5px;
    }
    .btn-nav a {
        color: #fff;
    }
    .btn-nav a:hover {
        color: #fff;
    }
</style>

