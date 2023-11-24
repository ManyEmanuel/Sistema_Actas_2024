<template>
  <q-card class="no-shadow q-pa-xs" bordered>
    <!-- <q-card-section>
    <div class="text-h6 text-grey-8">Casillas por capturar</div>
  </q-card-section>
  <q-separator />-->
    <q-card-section class="q-pa-none">
      <q-table
        grid
        :rows="listaSecciones.filter((x) => x.capturada == true)"
        :columns="columns"
        hide-pagination
        :filter="filter"
        :rows-per-page-options="[0]"
        no-data-label="Sin registros"
      >
        <template v-slot:top-right>
          <q-input
            square
            outlined
            dense
            v-model="filter"
            placeholder="Buscar casilla"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-4 col-sm-3 col-md-2 col-lg-1">
            <CardCapturadas
              :nombre="props.row.nombre"
              :tipo="props.row.tipo"
            ></CardCapturadas>
            <!--<card-profile :avatar="props.row.avatar" :name="props.row.name" :des="props.row.des"></card-profile>-->
          </div>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import CardCapturadas from "./CardCapturadas.vue";
import { useCaptura } from "../../../store/captura_store";
import { useQuasar } from "quasar";

const $q = useQuasar();
const capturaStore = useCaptura();
const { listaSecciones } = storeToRefs(capturaStore);
const filter = ref();
onBeforeMount(() => {
  //cargarDatos();
});

/*const cargarDatos = async () => {
  await capturaStore.loadSecciones();
};
*/
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
