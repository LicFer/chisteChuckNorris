import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jokes: [],
    randomJoke: null,
  },
  mutations: {
    setJokes(state, jokes) {
      state.jokes = jokes;
    },
    setRandomJoke(state, joke) {
      state.randomJoke = joke;
    },
  },
  actions: {
    fetchJokes({ commit }) {
      axios
        .get('https://api.chucknorris.io/jokes/search?query=chuck')
        .then((response) => {
          commit('setJokes', response.data.result);
        })
        .catch((error) => console.error(error));
    },
    fetchRandomJoke({ commit }) {
      axios
        .get('https://api.chucknorris.io/jokes/random')
        .then((response) => {
          commit('setRandomJoke', response.data);
        })
        .catch((error) => console.error(error));
    },
  },
  getters: {
    jokes: (state) => state.jokes,
    randomJoke: (state) => state.randomJoke,
  },
});
