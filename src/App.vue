<template>
  <div id="app">
    <Header />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #234;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-active {
  color: #4b8;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
