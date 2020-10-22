<template>
  <div>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-if="data">
      <h1>Cursos</h1>
      {{ data }}
    </div>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData";

export default {
  name: "cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style>
</style>