<template>
    <div>
      <h1>Chiste Random</h1>
      <button @click="getRandomJoke">Obtener chiste</button>
      <div v-if="randomJoke">
        <p>{{ randomJoke.value }}</p>
        <img :src="randomJoke.icon_url" alt="Chuck Norris" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      randomJoke() {
        return this.$store.getters.randomJoke
      },
    },
    methods: {
      getRandomJoke() {
        this.$store.dispatch('fetchRandomJoke')
      },
    },
  }
  </script>
  