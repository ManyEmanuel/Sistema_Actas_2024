import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCaptura = defineStore("captura", {
  state: () => ({
    listSecciones: [
      {
        id: 1,
        nombre: "0115",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 2,
        nombre: "0115",
        tipo: "Contigua 1",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 3,
        nombre: "0116",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 4,
        nombre: "0117",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 5,
        nombre: "0118",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 6,
        nombre: "0119",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 7,
        nombre: "0120",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 8,
        nombre: "0121",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 9,
        nombre: "0122",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 10,
        nombre: "0123",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 11,
        nombre: "0123",
        tipo: "Contigua 1",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: true,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 12,
        nombre: "0123",
        tipo: "Contigua 2",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 13,
        nombre: "0124",
        tipo: "Especial",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 14,
        nombre: "0125",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 15,
        nombre: "0126",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 16,
        nombre: "0127",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 17,
        nombre: "0128",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 18,
        nombre: "0129",
        tipo: "Especial",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 19,
        nombre: "0130",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 20,
        nombre: "0131",
        tipo: "Basica",
        votantes: 689,
        capturada_Pys: true,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
    ],
    listaSecciones: [],
    listaElecciones: [
      { value: 1, label: "Presidencia y Sindicatura" },
      { value: 2, label: "Diputaciones" },
      { value: 3, label: "Regidurias" },
    ],
  }),
  actions: {
    async loadSecciones(id) {
      console.log("Esta es la eleccion id", id);
      let listadoSecciones = this.listSecciones.map((secciones) => {
        let captura = null;
        switch (id) {
          case 1:
            captura = secciones.capturada_Pys;
            break;
          case 2:
            captura = secciones.capturada_Dip;
            break;
          case 3:
            captura = secciones.capturada_Reg;
            break;
        }
        return {
          id: secciones.id,
          nombre: secciones.nombre,
          tipo: secciones.tipo,
          votantes: secciones.votantes,
          capturada: captura,
          causales: secciones.causales,
        };
      });
      this.listaSecciones = listadoSecciones;
      console.log("Estp es el listados", this.listaSecciones);
    },
  },
});
