<template>
  <div>
    <h1>Chistes de Chuck Norris</h1>

    <!-- Mostrar botones para cada categoría -->
    <div>
      <button
        v-for="category in categories.slice(0, maxCategories)"
        :key="category"
        @click="loadChisteByCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <!-- Mostrar un solo chiste -->
    <div v-if="joke">
      <JokeCard :joke="joke" />
    </div>
    <p v-else>Cargando chistes...</p>
  </div>
</template>

<script>
// Importación de Axios
import axios from 'axios';
import JokeCard from '@/components/JokeCard.vue';

export default {
  components: {
    JokeCard,
  },
  data() {
    return {
      joke: null, // Solo un chiste
      categories: ["animal","career","celebrity",
      "dev","explicit","fashion","food","history",    // Lista de categorías maximo 16
      "money","movie","music","political","religion",
      "science","sport","travel"],
      maxCategories: 16,             // Número de categorías a mostrar
    };
  },
  methods: {
    // Cargar un chiste aleatorio de la categoría seleccionada
    loadChisteByCategory(category) {
      axios
        .get(`https://api.chucknorris.io/jokes/search?query=${category}`)
        .then(response => {
          // Seleccionar un chiste aleatorio de los resultados
          const randomIndex = Math.floor(Math.random() * response.data.result.length);
          this.joke = response.data.result[randomIndex]; // Mostrar solo un chiste
        })
        .catch(error => console.error(error));
    },
  },
  mounted() {
    // Cargar un chiste aleatorio de la primera categoría por defecto cuando la vista se monta
    this.loadChisteByCategory(this.categories[0]);
  },
};
</script>

<style scoped>
/* Estilos para la vista Home */
button {
  margin: 10px;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #35495e;
}

button:focus {
  outline: none;
}

label {
  margin-left: 10px;
}
</style>
