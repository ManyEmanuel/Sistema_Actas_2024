import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useElecciones = defineStore("elecciones", {
  state: () => ({
    listMunicipios: [
      {
        id: 1,
        nombre: "Acaponeta",
        presidencia: 63,
        diputaciones: 63,
        regidurias: 63,
      },
      {
        id: 2,
        nombre: "Ahuacatlán",
        presidencia: 26,
        diputaciones: 26,
        regidurias: 26,
      },
      {
        id: 3,
        nombre: "Amatlán de Cañas",
        presidencia: 24,
        diputaciones: 24,
        regidurias: 24,
      },
      {
        id: 4,
        nombre: "Bahía de Banderas",
        presidencia: 179,
        diputaciones: 179,
        regidurias: 179,
      },
      {
        id: 5,
        nombre: "Compostela",
        presidencia: 118,
        diputaciones: 118,
        regidurias: 118,
      },
      {
        id: 6,
        nombre: "Huajicorí",
        presidencia: 23,
        diputaciones: 23,
        regidurias: 23,
      },
      {
        id: 7,
        nombre: "Ixtlán del Rio",
        presidencia: 42,
        diputaciones: 42,
        regidurias: 42,
      },
      {
        id: 8,
        nombre: "Jala",
        presidencia: 29,
        diputaciones: 29,
        regidurias: 29,
      },
      {
        id: 9,
        nombre: "Del Nayar",
        presidencia: 54,
        diputaciones: 54,
        regidurias: 54,
      },
      {
        id: 10,
        nombre: "Rosamorada",
        presidencia: 57,
        diputaciones: 57,
        regidurias: 57,
      },
      {
        id: 11,
        nombre: "Ruiz",
        presidencia: 41,
        diputaciones: 41,
        regidurias: 41,
      },
      {
        id: 12,
        nombre: "San Blas",
        presidencia: 69,
        diputaciones: 69,
        regidurias: 69,
      },
      {
        id: 13,
        nombre: "San Pedro Lagunillas",
        presidencia: 17,
        diputaciones: 17,
        regidurias: 17,
      },
      {
        id: 14,
        nombre: "Santa María del Oro",
        presidencia: 36,
        diputaciones: 36,
        regidurias: 36,
      },
      {
        id: 15,
        nombre: "Santiago Ixcuintla",
        presidencia: 158,
        diputaciones: 158,
        regidurias: 158,
      },
      {
        id: 16,
        nombre: "Tecuala",
        presidencia: 62,
        diputaciones: 62,
        regidurias: 62,
      },
      {
        id: 17,
        nombre: "Tepic",
        presidencia: 592,
        diputaciones: 592,
        regidurias: 592,
      },
      {
        id: 18,
        nombre: "Tuxpan",
        presidencia: 50,
        diputaciones: 50,
        regidurias: 50,
      },
      {
        id: 19,
        nombre: "Xalisco",
        presidencia: 73,
        diputaciones: 73,
        regidurias: 73,
      },
      {
        id: 20,
        nombre: "La Yesca",
        presidencia: 40,
        diputaciones: 40,
        regidurias: 40,
      },
    ],
    municipio: {},
    listadoMunicipio: [],
    listadoElecciones: [],
  }),
  actions: {
    async loadMunicipio(id) {
      this.municipio = this.listMunicipios.find((x) => x.id == id);
    },

    async loadElecciones() {
      this.listadoElecciones = [
        {
          id: 1,
          titulo: "Presidencia",
          actas: "Actas esperadas: " + this.municipio.presidencia,
          icono: "public",
          background_image: "linear-gradient(292deg, #717463 13%, #717463 27%)",
        },

        {
          id: 2,
          titulo: "Diputaciones",
          actas: "Actas esperadas: " + this.municipio.diputaciones,
          icono: "public",
          background_image: "linear-gradient(292deg, #c89f97 13%, #c89f97 27%)",
        },

        {
          id: 3,
          titulo: "Regidurias",
          actas: "Actas esperadas: " + this.municipio.regidurias,
          icono: "public",
          background_image: "linear-gradient(292deg, #ad9844 13%, #ad9844 27%)",
        },
      ];
    },

    async loadMunicipios() {
      let listMunicipios = this.listMunicipios.map((municipio) => {
        return {
          label: municipio.nombre,
          value: municipio.id,
        };
      });
      this.listadoMunicipio = listMunicipios;
    },
  },
});
