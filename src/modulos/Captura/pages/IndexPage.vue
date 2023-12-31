<template>
  <q-layout>
    <q-page-container class="q-pa-lg">
      <div class="row">
        <div
          class="col-lg-12 col-sm-12 col-xs-12 col-md-12 text-center text-h5"
        >
          {{ labelEleccion }}
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-3 col-xs-6 col-md-12 q-pa-xs">
          <div class="text-left q-gutter-xs">
            <q-select
              dense
              options-dense
              bottom-slots
              outlined
              style="min-width: 300px"
              v-model="eleccionId"
              :options="listaElecciones"
              label="Elección"
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
      <q-tabs
        v-model="tab1"
        dense
        active-color="white"
        indicator-color="white"
        align="justify"
        tab-color="white"
      >
        <q-tab
          name="complementaria"
          :class="tab1 == 'complementaria' ? 'text-white' : ''"
          icon="ballot"
          label="Información complementaria"
          :style="tab1 == 'complementaria' ? 'background-color: #E91E63' : ''"
        />
        <q-tab
          name="votos"
          :class="tab1 == 'votos' ? 'text-white' : ''"
          icon="how_to_vote"
          label="Captura de votos"
          :style="tab1 == 'votos' ? 'background-color: #E91E63' : ''"
        >
        </q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab1" animated>
        <q-tab-panel name="complementaria" class="q-pa-sm">
          <q-card class="no-shadow" bordered>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="pink"
              indicator-color="pink"
              align="justify"
            >
              <q-tab
                name="pendientes"
                :class="tab == 'pendientes' ? 'text-pink' : ''"
                icon="hourglass_top"
                label="Pendientes de captura"
              />
              <q-tab
                name="capturadas"
                :class="tab == 'capturadas' ? 'text-pink' : ''"
                icon="done"
                label="Capturadas"
              >
              </q-tab>
            </q-tabs>
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="pendientes" class="q-pa-sm">
                <TablaPendientes></TablaPendientes>
              </q-tab-panel>
              <q-tab-panel name="capturadas" class="q-pa-sm">
                <TablaCapturadas></TablaCapturadas>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="votos" class="q-pa-sm">
          <q-card class="no-shadow" bordered>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="pink"
              indicator-color="pink"
              align="justify"
            >
              <q-tab
                name="pendientes"
                :class="tab == 'pendientes' ? 'text-pink' : ''"
                icon="hourglass_top"
                label="Pendientes de captura"
              />
              <q-tab
                name="capturadas"
                :class="tab == 'capturadas' ? 'text-pink' : ''"
                icon="done"
                label="Capturadas"
              >
              </q-tab>
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="pendientes" class="q-pa-sm">
                <TablaPendientes></TablaPendientes>
              </q-tab-panel>
              <q-tab-panel name="capturadas" class="q-pa-sm">
                <TablaCapturadas></TablaCapturadas>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { storeToRefs } from "pinia";
import TablaPendientes from "../components/TablaPendientes.vue";
import TablaCapturadas from "../components/TablaCapturadas.vue";
import { useRouter } from "vue-router";
//import CardPendientes from "../components/CardPendientes.vue";
import { useCaptura } from "../../../store/captura_store";
import { useQuasar } from "quasar";

const $q = useQuasar();
const capturaStore = useCaptura();
const { listaSecciones, listaElecciones, isCapturaVotos } =
  storeToRefs(capturaStore);
const filter = ref();
const eleccionId = ref();
const labelEleccion = ref();
const router = useRouter();
const tab = ref("pendientes");
const tab1 = ref("complementaria");
onBeforeMount(() => {
  cargarDatos();
});

const cargarDatos = async () => {
  $q.loading.show();
  let eleccionRoute = parseInt(router.currentRoute.value.query.eleccion);
  await capturaStore.loadSecciones(eleccionRoute);
  let filtroEleccion = listaElecciones.value.find(
    (x) => x.value == eleccionRoute
  );
  eleccionId.value = filtroEleccion;
  labelEleccion.value = filtroEleccion.label;
  $q.loading.hide();
};

watch(eleccionId, (val) => {
  cambiarEleccion(val.value);
  labelEleccion.value = val.label;
});

watch(tab1, (val) => {
  if (val == "complementaria") {
    seleccionCarga(false);
  } else {
    seleccionCarga(true);
  }
});

watch(tab, (val) => {
  if (val == "pendientes") {
    seleccionConsulta(false);
  } else {
    seleccionConsulta(true);
  }
});

const seleccionCarga = async (valor) => {
  $q.loading.show();
  await capturaStore.actualizarIsCapturaVotos(valor);
  $q.loading.hide();
};

const seleccionConsulta = async (valor) => {
  $q.loading.show();
  await capturaStore.actualizarIsConsulta(valor);
  $q.loading.hide();
};

const cambiarEleccion = async (id) => {
  $q.loading.show();
  await capturaStore.loadSecciones(id);
  router.push({
    query: {
      municipio: router.currentRoute.value.query.municipio,
      eleccion: id,
    },
  });
  $q.loading.hide();
};

const volverPanel = async () => {
  $q.loading.show();
  router.push({
    path: "/Elecciones",
    query: { municipio: router.currentRoute.value.query.municipio },
  });
  $q.loading.hide();
};

const columns = [
  {
    name: "nombre",
    align: "center",
    label: "Sección",
    field: "nombre",
    sortable: true,
  },
  {
    name: "tipo",
    align: "center",
    label: "Tipo casilla",
    field: "tipo",
    sortable: true,
  },
  {
    name: "id",
    align: "center",
    label: "Opciones",
    field: "id",
    sortable: false,
  },
];
</script>
