import IndexPage from "../pages/IndexPage";
import PokemonPage from "../pages/PokemonPage";

const routes = [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/:name",
    component: PokemonPage,
  },
];

export default routes;
