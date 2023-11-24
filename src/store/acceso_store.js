import { defineStore, useStore } from "pinia";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";

export const isAuthenticatedGuard = async (to, from, next) => {
  const router = useRouter();
  const prueba = useAccesoStore();
  const acceso = "Administrador";
  if (acceso == "Administrador") {
    next({ name: "Principal" });
  } else if (acceso == "Capturista") {
    router.push({
      path: "/Elecciones",
      query: { municipio: prueba.usuario.municipioId },
    });
  }
};

export const useAccesoStore = defineStore("acceso", {
  state: () => ({
    usuario: {
      idUsuario: 1,
      nombre: "Usuario de prueba",
      municipioId: 8,
      tipo: "Administrador",
    },
  }),
});
