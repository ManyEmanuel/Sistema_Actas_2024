<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <!--<q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer = !toggleLeftDrawer"
        />-->

        <q-toolbar-title> Sistema de registro de actas </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!--<q-drawer v-model="toggleLeftDrawer" show-if-above bordered>
      <q-list>
        <q-item :to="{ name: 'Elecciones' }">
          <q-item-section avatar>
            <q-icon name="looks_one" color="purple" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-purple label-title text-bold"
              >Elecciones</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>-->
    <q-footer reveal bordered class="toolbar">
      <q-toolbar>
        <q-toolbar-title
          ><div>
            &#169; Unidad Técnica de Informática y Estadística - Proceso
            Electoral Local Ordinario 2024
          </div></q-toolbar-title
        >
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
const toggleLeftDrawer = ref(false);
/*export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});*/
</script>
<style>
.toolbar {
  background-color: #d1308a; /* Replace #FF0000 with your desired hexadecimal color */
}
</style>
