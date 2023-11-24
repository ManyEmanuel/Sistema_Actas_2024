<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="row">
        <div
          v-if="usuario.tipo == 'Administrador'"
          class="col-lg-3 col-sm-3 col-xs-6 col-md-12 q-pa-lg"
        >
          <div class="text-left q-gutter-xs">
            <q-select
              dense
              options-dense
              bottom-slots
              outlined
              style="min-width: 300px"
              v-model="municipioId"
              :options="listadoMunicipio"
              label="Municipio"
            >
              <template v-slot:before>
                <q-btn outline round icon="arrow_back" @click="volverPanel()">
                  <q-tooltip>Volver al panel</q-tooltip>
                </q-btn>
              </template>
            </q-select>
          </div>
        </div>
      </div>
      <section
        style="min-height: 25vh"
        class="flex text-white flex-center layout_bg"
      >
        <div style="position: relative">
          <div class="text-h4 text-center text-black">
            Elecciones de {{ municipio.nombre }}
          </div>
        </div>
      </section>
      <section class="q-pb-lg">
        <div class="row justify-center q-col-gutter-lg q-px-lg">
          <div
            v-for="item in listadoElecciones"
            :key="item.id"
            class="col-lg-3 col-md-3 col-xs-12 col-sm-12"
          >
            <q-card
              class="text-white my-card"
              v-q-clickable
              @click="selectEleccion(item.id)"
              :style="{ 'background-image': item.background_image }"
            >
              <q-card-section>
                <div class="text-h6 text-center">
                  {{ item.titulo }}
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-h2 text-weight-bolder text-center">
                  <q-icon :name="item.icono"></q-icon>
                </div>
              </q-card-section>
              <q-card-section class="q-pa-none">
                <div class="text-h4 text-weight-bolder text-center">
                  {{ item.actas }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";
import { useAccesoStore } from "../../../store/acceso_store";
import { useElecciones } from "../../../store/elecciones_store";
import { useRouter } from "vue-router";
const accesoStore = useAccesoStore();
const $q = useQuasar();
const eleccionesStore = useElecciones();
const { municipio, listadoMunicipio, listadoElecciones } =
  storeToRefs(eleccionesStore);
const { usuario } = storeToRefs(accesoStore);
const municipioId = ref();
const router = useRouter();

onBeforeMount(() => {
  cargarDatos();
});

const cargarDatos = async () => {
  $q.loading.show();
  let municipioIdRoute = router.currentRoute.value.query.municipio;
  await eleccionesStore.loadMunicipio(municipioIdRoute);
  await eleccionesStore.loadMunicipios();
  await eleccionesStore.loadElecciones();
  let filtroMunicipio = listadoMunicipio.value.find(
    (x) => x.value == municipioIdRoute
  );
  municipioId.value = filtroMunicipio;
  $q.loading.hide();
};

const cambiarMunicipioAdmin = async (id) => {
  $q.loading.show();
  await eleccionesStore.loadMunicipio(id);
  await eleccionesStore.loadElecciones();
  router.push({ query: { municipio: id } });
  $q.loading.hide();
};

const volverPanel = async () => {
  $q.loading.show();
  router.push({
    path: "/Principal",
  });
  $q.loading.hide();
};

const selectEleccion = async (id) => {
  router.push({
    path: "/Captura",
    query: {
      municipio: router.currentRoute.value.query.municipio,
      eleccion: id,
    },
  });
};

watch(municipioId, (val) => {
  cambiarMunicipioAdmin(val.value);
});
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
