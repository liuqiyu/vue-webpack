<template>
  <div id="app">
    123
    <router-link to="/">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
};
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    padding-top: 42px;
  }
</style>
