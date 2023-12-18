<template>
  <div>
    <q-card style="width: 100%">
      <q-card-section>
        <q-form @submit="onSubmit()">
          <div class="row q-pa-lg">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-select
                v-model="complementaria.id_Estatus"
                label="Estatus que se recibio el acta"
                :options="estatusActas"
              />
            </div>
            <div class="col-12 text-subtitle">
              Los rubros a llenar vienen enumeradas conforme al acta recibida
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
              <q-input
                v-model="complementaria.sobrantes"
                label="(2)- Boletas sobrantes de la elección"
                type="number"
                min="0"
              ></q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
              <q-input
                v-model="complementaria.votos_Ciudadanos"
                label="(3)- Personas que votaron en la elección"
                type="number"
                min="0"
              ></q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
              <q-input
                v-model="complementaria.votos_Representantes"
                label="(4)- Representantes de partidos políticos y candidaturas independientes que votaron"
                type="number"
                min="0"
              ></q-input>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
              <q-input
                v-model="complementaria.votos_Urnas"
                label="(5)- Total de personas que votaron y representantes"
                type="number"
                min="0"
              ></q-input>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
              <q-input
                v-model="complementaria.total_Votos"
                label="(7)- Total de votos de la elección sacados de la urna"
                type="number"
                min="0"
              ></q-input>
            </div>
            <div
              class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm text-center"
            >
              (10)- ¿Se presentaron incidentes durante el escrutinio y computo?
              <q-option-group
                v-model="incidenciaId"
                :options="opcionesIncidencia"
                color="primary"
                inline
              />
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
              <q-input
                :disable="!complementaria.incidentes"
                v-model="complementaria.descripcion_incidentes"
                autogrow
                label="Describa la incidencia"
              ></q-input>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useCaptura } from "../../../store/captura_store";
import { useQuasar } from "quasar";

const $q = useQuasar();
const capturaStore = useCaptura();
const incidenciaId = ref(false);
const opcionesIncidencia = ref([
  { value: false, label: "No" },
  { value: true, label: "Si" },
]);
const { estatusActas, complementaria } = storeToRefs(capturaStore);

watch(incidenciaId, (val) => {
  complementaria.value.incidentes = val;
});
</script>
