<template>
  <div id="app">
    <header-top></header-top>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    'header-top':Header
  }
}
</script>

<style>

</style>
