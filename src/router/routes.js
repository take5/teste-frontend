// ORIGINAL
const routes = [
  {
    path: "/",
    component: () => import("pages/IndexPage.vue"),
    // children: [
    //   { path: "/:name", component: () => import("pages/PokemonPage.vue") },
    // ],
  },
  {
    path: "/:name",
    component: () => import("pages/PokemonPage"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

// CERTO
// import IndexPage from "../pages/IndexPage";
// import PokemonPage from "../pages/PokemonPage";

// const routes = [
//   {
//     path: "/",
//     component: IndexPage,
//   },
//   {
//     path: "/:name",
//     component: PokemonPage,
//   },
// ];

// export default routes;

// const routes = [
//   {
//     path: "/",
//     component: () => import("pages/IndexPage"),
//     children: [
//       // Profile page
//       {
//         path: "/:name", // here it is, route /user/profile
//         component: () => import("pages/PokemonPage"), // we reference /src/pages/Profile.vue imported above
//       },
//     ],
//   },
//   // {
//   //   path: "/:name",
//   //   component: () => import("pages/PokemonPage"),
//   // },
//   {
//     path: "/:catchAll(.*)*",
//     component: () => import("pages/ErrorNotFound.vue"),
//   },
// ];

// export default routes;
