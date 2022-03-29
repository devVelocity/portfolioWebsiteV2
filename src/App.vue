<template>
  <navigation/>
  <span class="block h-20"></span>
  <router-view/>
  <footer/>
</template>

<script>
import navigation from '@/components/Navigation.vue'
import footer from '@/components/Footer.vue'

export default {
  components: {
    navigation,
    footer
  }
}
</script>

<style>
#app {
  font-family: 'Fredoka';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #252931;
  min-height: 100vh;
  overflow-x:hidden;
  width: 100vw;
}

</style>
