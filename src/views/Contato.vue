<template>
  <div>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-if="data">
      <h1>Contato</h1>
      {{ data }}
    </div>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData";

export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>

<style>
</style>