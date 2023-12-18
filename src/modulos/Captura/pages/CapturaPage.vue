<template>
  <q-layout>
    <q-page-container class="q-pa-lg">
      <q-card>
        <q-card-section
          class="q-pa-xs q-gutter-xs q-flex justify-center items-center"
        >
          <div class="row items-center">
            <div class="col-lg-3 col-sm-3 col-xs-6 col-md-12 q-pa-xs">
              <div class="text-center q-gutter-xs">
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
                    <q-btn
                      outline
                      round
                      icon="arrow_back"
                      @click="regresoEleccion()"
                    >
                      <q-tooltip>Volver al panel</q-tooltip>
                    </q-btn>
                  </template>
                </q-select>
              </div>
            </div>
            <div class="col-lg-3 col-sm-3 col-xs-6 col-md-12 q-pa-xs">
              <div class="text-center q-gutter-xs">
                <q-select
                  dense
                  options-dense
                  bottom-slots
                  outlined
                  style="min-width: 300px"
                  v-model="seccionId"
                  :options="seccionesPendientes"
                  label="Sección"
                >
                </q-select>
              </div>
            </div>
            <div class="col-lg-3 col-sm-3 col-xs-6 col-md-12 q-pa-xs">
              <div class="text-center q-gutter-xs">
                <q-select
                  dense
                  options-dense
                  bottom-slots
                  outlined
                  style="min-width: 300px"
                  v-model="casillaId"
                  :options="casillasPendientes"
                  label="Casilla"
                >
                </q-select>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <br />

      <q-separator></q-separator>
      <br />

      <CardBoletas v-if="isCapturaVotos == true" />
      <ModalComplementaria v-else />
      <br />
      <div class="col-12 justify-end">
        <div class="text-right q-gutter-xs">
          <q-btn
            label="Guardar"
            @click="GuardarVotos()"
            color="positive"
            class="q-ml-sm"
          />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { storeToRefs } from "pinia";

import { useRouter } from "vue-router";
import { useCaptura } from "../../../store/captura_store";
import { useQuasar } from "quasar";
import CardBoletas from "../components/CardBoletas.vue";
import ModalComplementaria from "../components/ModalComplementaria.vue";

const $q = useQuasar();
const capturaStore = useCaptura();
const {
  listaSecciones,
  listaElecciones,
  listNumeroSeccion,
  listTipoCasillas,
  listaPartidos,
  resultadosVotaciones,
  listaComplementoVoto,
  isCapturaVotos,
  complementaria,
} = storeToRefs(capturaStore);
const filter = ref();
const eleccionId = ref();
const seccionId = ref();
const casillaId = ref();
const seccionesPendientes = ref();
const casillasPendientes = ref();
const router = useRouter();

onBeforeMount(() => {
  cargarSelects();
});

const cargarSelects = async () => {
  $q.loading.show();
  let eleccionRoute = parseInt(router.currentRoute.value.query.eleccion);
  let seccionRoute = parseInt(router.currentRoute.value.query.seccion);
  let casillaRoute = parseInt(router.currentRoute.value.query.casilla);
  await capturaStore.loadSecciones(eleccionRoute);
  let filtroEleccion = listaElecciones.value.find(
    (x) => x.value == eleccionRoute
  );
  eleccionId.value = filtroEleccion;
  //------------------------------------------------------------------------------//
  seccionesPendientes.value = listNumeroSeccion.value.filter((x) =>
    listaSecciones.value.some(
      (item) => item.capturada == false && item.seccionId == x.value
    )
  );
  let filtroSeccion = seccionesPendientes.value.find(
    (x) => x.value == seccionRoute
  );
  seccionId.value = filtroSeccion;

  //------------------------------------------------------------------------------//

  casillasPendientes.value = listTipoCasillas.value.filter((x) =>
    listaSecciones.value.some(
      (item) =>
        item.capturada == false &&
        item.seccionId == seccionRoute &&
        item.tipoId == x.value
    )
  );

  let filtroCasilla = casillasPendientes.value.find(
    (x) => x.value == casillaRoute
  );
  casillaId.value = filtroCasilla;
  $q.loading.hide();
};

const regresoEleccion = async () => {
  await capturaStore.actualizarIsCapturaVotos(false);
  await capturaStore.actualizarIsConsulta(false);
  router.push({
    path: "/Captura",
    query: {
      municipio: router.currentRoute.value.query.municipio,
      eleccion: router.currentRoute.value.query.eleccion,
    },
  });
};

const GuardarVotos = async () => {
  $q.loading.show();
  let idEleccion = eleccionId.value.value;
  let idSeccion = seccionId.value.value;
  let idCasilla = casillaId.value.value;
  let resp = null;
  let index = listaSecciones.value.findIndex(
    (x) => x.seccionId == idSeccion && x.tipoId == idCasilla
  );
  if (isCapturaVotos.value == true) {
    resp = await capturaStore.createVotacion(
      listaPartidos.value,
      idEleccion,
      idSeccion,
      idCasilla
    );
    await capturaStore.createComplementoVoto(
      listaComplementoVoto.value,
      idEleccion,
      idSeccion,
      idCasilla
    );
    await capturaStore.actualizarCasillaVotos(index, idEleccion);
    await capturaStore.initVotaciones();
  } else {
    resp = await capturaStore.createInformacionComplementarias(
      complementaria.value,
      idEleccion,
      idSeccion,
      idCasilla
    );
    await capturaStore.actualizarCasillaComplementaria(index, idEleccion);
    await capturaStore.initComplementaria();
  }

  /*await capturaStore.createCausales(
    listaPartidos.value,
    listaComplementoVoto.value
  );*/

  await capturaStore.loadSecciones(idEleccion);

  if (resp == true) {
    $q.notify({
      type: "positive",
      message: "Registro guardado",
    });
  }
  //await capturaStore.loadResultados(idEleccion, idSeccion, idCasilla);
  cargarSelects();
  $q.loading.hide();
};
</script>
