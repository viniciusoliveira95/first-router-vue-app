<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="data">
        <h1>{{ data.titulo }}</h1>
        <p>{{ data.descricao }}</p>
        <ul>
          <li><b>Email: </b>{{ data.contato.email }}</li>
          <li><b>Telefone: </b> {{ data.contato.telefone }}</li>
          <li><b>Endereço: </b> {{ data.contato.endereco }}</li>
        </ul>
      </div>
    </transition>
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