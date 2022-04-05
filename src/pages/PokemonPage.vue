<template>
  <div class="column items-center">
    <div class="col" id="container-perfil">
      <div class="text-h4" id="title">{{ pokemon.name }}</div>

      <q-avatar id="avatar">
        <img :src="pokemon.sprites.front_default" />
      </q-avatar>
      <div style="display: flex; justify-content: center">
        <p
          v-for="type in pokemon.types"
          :key="type.type.name"
          style="font-size: 18px"
          id="tipos"
        >
          {{ type.type.name }}
        </p>
      </div>
      <!-- <p id="data">Peso: {{ weightInKg() }}</p> -->
      <p id="data">Peso: {{ pokemon.weight }}</p>
      <p id="data">Altura: {{ pokemon.height }}</p>
      <p v-for="stat in pokemon.stats" :key="stat.stat.name" id="data">
        {{ stat.stat.name }}: {{ stat.base_stat }}
      </p>
      <q-btn
        style="background: goldenrod; color: white"
        @click="goBack"
        glossy
        label="Voltar"
        id="button-back"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import api from "../boot/axios";
import router from "../router";
export default {
  name: "PokemonPage",
  data() {
    return {
      pokemon: {},
      weightInLb: 0,
    };
  },
  created: function () {
    api.get(`pokemon/${this.$route.params.name}`).then((response) => {
      this.pokemon = response.data;
      this.weights = response.data.weight;
      this.heights = response.data.height;
      console.log("Dados:", response.data);
      console.log("Peso:", response.data.weight, "lb");
      console.log("Altura:", response.data.height, "pés");
    });
  },
  computed: {
    weightInKg() {
      console.log("entrou");
      const weightInLb = this.weight;
      return +weightInLb * 0.453592;
    },
  },
  methods: {
    goBack: function () {
      router.push({ path: `/` });
    },
  },
};
</script>
<style>
#avatar {
  width: 10rem;
  height: 10rem;
  box-shadow: 0px 0px 1em gold;
  margin: 45px 0px;
}
#data {
  text-align: center;
  text-transform: capitalize;
  font-size: 18px;
}
#title {
  text-transform: capitalize;
  text-align: center;
}
#container-perfil {
  width: 20rem;
  margin: 2rem;
  box-shadow: 0px 0px 1em gold;
  border-radius: 2rem;
  padding: 1.5rem;
}
#button-back,
#container-perfil,
#data,
#avatar {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
