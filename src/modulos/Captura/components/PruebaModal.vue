<template>
  <q-card class="no-shadow" bordered>
    <q-card-section class="q-pt-none text-center my-card" v-q-clickable>
      <q-input v-model="seccionModel" label="Seccion"> </q-input>
      <q-input v-model="tipoModel" label="tipo"> </q-input>
      <q-input v-model="seccionIdModel" label="SeccionId"> </q-input>
      <q-input v-model="tipoIdModel" label="tipoId"> </q-input>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  seccion: String,
  tipo: String,
  seccionId: Number,
  tipoId: Number,
});

const seccionModel = ref(props.seccion);
const tipoModel = ref(props.tipo);
const seccionIdModel = ref(props.seccionId);
const tipoIdModel = ref(props.tipoId);

watch(props, (val) => {
  seccionModel.value = val.seccion;
  tipoModel.value = val.tipo;
  seccionIdModel.value = val.seccionIdModel;
  tipoIdModel.value = val.tipoId;
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
