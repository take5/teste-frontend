<template>
  <div v-if="this.shouldRender" class="col-lg-3 col-md-4 col-sm-6" id="cards">
    <div class="my-content">
      <q-card class="my-card">
        <q-img :src="image" id="imagem-pokemon">
          <div
            class="absolute-bottom text-subtitle3 text-center"
            id="pokemon-name"
          >
            <div class="text-title">{{ this.name }}</div>

            <div
              class="text-subtitle1"
              style="display: flex; justify-content: center"
            >
              <p
                v-for="type in types"
                :key="type.type.name"
                id="tipos"
                style="text-transform: capitalize"
              >
                {{ type.type.name }}
              </p>
            </div>
          </div>
        </q-img>
        <q-card-actions vertical align="center">
          <q-btn flat @click="navigate">Perfil</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
import router from "../router";
export default {
  name: "CardPokemon",
  props: {
    name: String,
    url: String,
    filter: String,
  },
  data() {
    return {
      image: "",
      types: [],
      shouldRender: true,
    };
  },
  created: function () {
    api.get(`pokemon/${this.name}`).then((response) => {
      this.image = response.data.sprites.front_default;
      this.types = response.data.types;
    });
  },
  methods: {
    navigate: function () {
      router.push({ path: `/${this.name}` });
    },
  },
  watch: {
    filter: function (newVal) {
      if (newVal === "all") return (this.shouldRender = true);

      this.shouldRender = this.types.map((t) => t.type.name).includes(newVal);
    },
  },
};
</script>

<style>
#pokemon-name {
  font-size: 20px;
  text-transform: capitalize;
  padding: 5px;
  height: 10vh;
}
.my-content {
  width: 18rem !important;
}
#tipos {
  padding-right: 5px;
  font-size: 15px;
  text-transform: capitalize;
}
</style>
