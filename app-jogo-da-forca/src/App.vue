<template>
  <div id="app">
    <router-view></router-view>
  </div>
  

</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
}

html, body {
  height: 100%; 
  width: 100%;
  padding: 0;
  margin: 0;
}

footer{
  background: #A4B720;
  height: 4vh;
  color:  rgba(20, 77, 91, 1);
  align-content: center;
  justify-content: flex-start;
  font-family: 'Bigelow Rules', cursive;
  font-size: 1.8em;
}
</style>


      





