<template>
  <q-card class="no-shadow" bordered>
    <q-card-section
      class="q-pt-none text-center my-card"
      v-q-clickable
      @click="selectCasillas(seccionId, tipoId)"
    >
      <div class="text-h6 text-grey-8">
        {{ seccion }}
      </div>
      <div class="text-caption text-grey-8">
        {{ tipo }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";
import { useQuasar } from "quasar";

import { useCaptura } from "../../../store/captura_store";

const router = useRouter();
const $q = useQuasar();
const props = defineProps({
  seccion: String,
  tipo: String,
  seccionId: Number,
  tipoId: Number,
});
const capturaStore = useCaptura();

const selectCasillas = async (seccionIdP, tipoIdP) => {
  let tipoElecion = router.currentRoute.value.query.eleccion;
  let municipioRouter = router.currentRoute.value.query.municipio;
  await capturaStore.loadResultados(tipoElecion, seccionIdP, tipoIdP);
  $q.loading.show();
  router.push({
    path: "/Boleta",
    query: {
      seccion: seccionIdP,
      casilla: tipoIdP,
      eleccion: tipoElecion,
      municipio: municipioRouter,
    },
  });
  $q.loading.hide();
};
</script>
<style>
.my-card {
  transition: background-color 0.5s;
  transition: transform 0.2s;
}
.my-card:hover {
  background-color: rgb(240, 204, 237);
  transform: scale(1.05);
}

.my-card:active {
  transform: scale(0.9);
}
</style>
