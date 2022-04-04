<template>
  <HeaderPokemon />
  <!-- <ButtonLanguage /> -->
  <CardsPokemons />
</template>

<script>
import { defineComponent } from "vue";
import HeaderPokemon from "../components/HeaderPokemon.vue";
import CardsPokemons from "../components/CardsPokemons.vue";
// import ButtonLanguage from "../components/ButtonLanguage.vue";

export default defineComponent({
  name: "IndexPage",
  components: { HeaderPokemon, CardsPokemons },
});
</script>
