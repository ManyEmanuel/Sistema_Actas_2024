import { isAuthenticatedGuard } from "src/store/acceso_store";
const routes = [
  {
    path: "",
    name: "index",
    beforeEnter: [isAuthenticatedGuard],
    component: () => import("pages/Index.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      //{ path: "", component: () => import("pages/Index.vue") },
      {
        path: "/Elecciones",
        name: "Elecciones",
        component: () => import("src/modulos/Elecciones/pages/IndexPage.vue"),
      },
      {
        path: "/Principal",
        name: "Principal",
        component: () =>
          import("src/modulos/Administrador/pages/IndexPage.vue"),
      },
      {
        path: "/Captura",
        name: "Captura",
        component: () => import("src/modulos/Captura/pages/IndexPage.vue"),
      },
      {
        path: "/Boleta",
        name: "Boleta",
        component: () => import("src/modulos/Captura/pages/CapturaPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
