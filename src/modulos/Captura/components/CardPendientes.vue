<template>
  <q-card class="no-shadow" bordered>
    <q-card-section class="q-pt-none text-center my-card" v-q-clickable>
      <div class="text-h6 text-grey-8">
        {{ nombre }}
      </div>
      <div class="text-caption text-grey-8">
        {{ tipo }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  nombre: String,
  tipo: String,
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
