<template>
  <div id="q-app" style="min-height: 100vh">
    <div class="q-pa-md" id="container">
      <span style="color: black">Filtro </span>
      <select style="margin-top: 4rem; margin-bottom: 2rem" @change="onChange">
        <option v-for="type in types" :key="type.url">{{ type.name }}</option>
      </select>
      <div class="row q-col-gutter-lg">
        <CardPokemon
          :name="pokemon.name"
          :url="pokemon.url"
          :filter="type"
          :key="pokemon.url"
          v-for="pokemon in pokemons"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../boot/axios";
import router from "../router";
import CardPokemon from "./CardPokemon.vue";
export default {
  name: "CardsPokemons",
  components: {
    CardPokemon,
  },
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      types: [],
      type: "all",
      search: "",
    };
  },
  created: function () {
    api.get("pokemon?limit=151&offset=0").then((response) => {
      this.pokemons = response.data.results;
      this.filteredPokemons = response.data.results;
    });
    api.get("type").then((response) => {
      this.types = [{ url: "", name: "all" }, ...response.data.results];
    });
  },
  methods: {
    onChange: function (e) {
      this.type = e.target.value;
    },
  },
};
</script>

<style>
#container {
  padding: 18px 0px;
  margin: auto;
  width: 80%;
}
</style>
