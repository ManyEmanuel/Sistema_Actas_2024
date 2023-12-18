<template>
  <div class="row q-col-gutter-lg q-pa-lg">
    <div
      v-for="item in isConsulta == false
        ? listaPartidos
        : consultaResultadoVotaciones"
      :key="item"
      class="q-pa-xs col-xs-6 col-sm-4 col-md-3 col-lg-2"
    >
      <q-card bordered style="height;: 40px">
        <q-card-section class="text-center">
          <q-img :src="item.logo" height="50px" width="50px"></q-img>
          <div class="text-h6">
            {{ item.nombre }}
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          <div class="row justify-center">
            <q-input
              class="col-3"
              input-class="centered-input"
              v-model="item.inputValue"
              type="number"
              min="0"
              :readonly="isConsulta"
              style="text-align: center"
            ></q-input>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div
      v-for="item in isConsulta == false
        ? listaComplementoVoto
        : consultaResultadoComplementoVotaciones"
      :key="item"
      class="q-pa-xs col-xs-6 col-sm-4 col-md-3 col-lg-2"
    >
      <q-card bordered>
        <q-card-section class="text-center">
          <div class="text-h6">
            {{ item.nombre }}
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          <div class="row justify-center">
            <q-input
              class="col-3"
              input-class="centered-input"
              v-model="item.inputValue"
              type="number"
              min="0"
              :readonly="isConsulta"
            ></q-input>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCaptura } from "../../../store/captura_store";

const capturaStore = useCaptura();
const {
  listaSecciones,
  listaPartidos,
  listaComplementoVoto,
  isConsulta,
  consultaResultadoComplementoVotaciones,
  consultaResultadoVotaciones,
} = storeToRefs(capturaStore);
</script>
<style scoped>
.texto-center {
  text-align: center;
}

.centered-input input {
  text-align: center;
}
</style>
