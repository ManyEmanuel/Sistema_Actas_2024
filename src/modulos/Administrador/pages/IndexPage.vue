<template>
  <q-layout
    view="lHh Lpr lFf"
    style="
      background: radial-gradient(
        circle,
        rgba(209, 48, 138, 1) 3%,
        rgba(221, 133, 186, 0.14889705882352944) 33%
      );
    "
  >
    <q-page-container>
      <div class="row q-col-gutter-lg q-pa-lg">
        <div
          v-for="item in listaMunicipio"
          :key="item.id"
          class="col-lg-3 col-md-3 col-xs-12 col-sm-6"
        >
          <q-card
            class="no-shadow my-card"
            bordered
            v-q-clickable
            @click="SelectMunicipio(item.id)"
          >
            <q-card-section class="text-center">
              <q-avatar size="70px" class="shadow-10">
                <q-icon name="public" class="text-purple" size="70px" />
              </q-avatar>
            </q-card-section>

            <q-card-section class="q-pt-none text-center">
              <div class="text-h6 text-grey-8">
                {{ item.nombre }}
              </div>
              <div class="text-caption text-grey-8">
                Casillas instaladas {{ item.casillas }}
              </div>
              <div class="text-caption text-grey-8">
                Listado Nominal {{ item.listadoNominal }}
              </div>
            </q-card-section>
            <q-card-actions class="q-pt-none" align="around">
              <div class="text-caption text-grey-8">
                Actas esperadas {{ item.actasTotal }}
              </div>
              <div class="text-caption text-grey-8">
                Actas computadas {{ item.actasRecibidas }}
              </div>
            </q-card-actions>
            <q-card-section class="text-center">
              Porcentaje de avance -
              {{ (item.porcentaje * 100).toFixed(2) }}%
              <q-linear-progress
                :value="item.porcentaje"
                rounded
                color="purple"
                track-color="grey-8"
                class="q-mt-sm"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useAdministrador } from "../../../store/administrador_store";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const $q = useQuasar();
const administradorStore = useAdministrador();
const { listaMunicipio } = storeToRefs(administradorStore);
const lik = ref("../../../assets/PAN.png");
const router = useRouter();

const SelectMunicipio = async (id) => {
  router.push({
    path: "/Elecciones",
    query: { municipio: id },
  });
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
