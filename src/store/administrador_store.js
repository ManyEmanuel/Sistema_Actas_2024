import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useAdministrador = defineStore("administrador", {
  state: () => ({
    listaMunicipio: [
      {
        id: 1,
        nombre: "Acaponeta",
        casillas: 63,
        listadoNominal: 27434,
        actasTotal: 189,
        actasRecibidas: 95,
        porcentaje: (1 / 189) * 95,
      },
      {
        id: 2,
        nombre: "Ahuacatlán",
        casillas: 26,
        listadoNominal: 12518,
        actasTotal: 78,
        actasRecibidas: 10,
        porcentaje: (1 / 78) * 10,
      },
      {
        id: 3,
        nombre: "Amatlán de Cañas",
        casillas: 24,
        listadoNominal: 9483,
        actasTotal: 72,
        actasRecibidas: 27,
        porcentaje: (1 / 72) * 27,
      },
      {
        id: 4,
        nombre: "Bahía de Banderas",
        casillas: 179,
        listadoNominal: 117809,
        actasTotal: 537,
        actasRecibidas: 150,
        porcentaje: (1 / 537) * 150,
      },
      {
        id: 5,
        nombre: "Compostela",
        casillas: 118,
        listadoNominal: 59067,
        actasTotal: 354,
        actasRecibidas: 12,
        porcentaje: (1 / 354) * 12,
      },
      {
        id: 6,
        nombre: "Huajicorí",
        casillas: 23,
        listadoNominal: 8350,
        actasTotal: 69,
        actasRecibidas: 55,
        porcentaje: (1 / 69) * 55,
      },
      {
        id: 7,
        nombre: "Ixtlán del Río",
        casillas: 42,
        listadoNominal: 22183,
        actasTotal: 126,
        actasRecibidas: 20,
        porcentaje: (1 / 126) * 20,
      },
      {
        id: 8,
        nombre: "Jala",
        casillas: 29,
        listadoNominal: 13727,
        actasTotal: 57,
        actasRecibidas: 2,
        porcentaje: (1 / 57) * 2,
      },
      {
        id: 9,
        nombre: "Del Nayar",
        casillas: 54,
        listadoNominal: 27181,
        actasTotal: 162,
        actasRecibidas: 95,
        porcentaje: (1 / 162) * 95,
      },
      {
        id: 10,
        nombre: "Rosamorada",
        casillas: 57,
        listadoNominal: 26292,
        actasTotal: 171,
        actasRecibidas: 63,
        porcentaje: (1 / 171) * 63,
      },
      {
        id: 11,
        nombre: "Ruiz",
        casillas: 41,
        listadoNominal: 18082,
        actasTotal: 123,
        actasRecibidas: 95,
        porcentaje: (1 / 123) * 95,
      },
      {
        id: 12,
        nombre: "San Blas",
        casillas: 69,
        listadoNominal: 30419,
        actasTotal: 207,
        actasRecibidas: 20,
        porcentaje: (1 / 207) * 20,
      },
      {
        id: 13,
        nombre: "San Pedro Lagunillas",
        casillas: 17,
        listadoNominal: 6724,
        actasTotal: 51,
        actasRecibidas: 51,
        porcentaje: (1 / 51) * 51,
      },
      {
        id: 14,
        nombre: "Santa María del Oro",
        casillas: 36,
        listadoNominal: 18599,
        actasTotal: 108,
        actasRecibidas: 40,
        porcentaje: (1 / 108) * 40,
      },
      {
        id: 15,
        nombre: "Santiago Ixcuintla",
        casillas: 158,
        listadoNominal: 72737,
        actasTotal: 474,
        actasRecibidas: 96,
        porcentaje: (1 / 474) * 96,
      },
      {
        id: 16,
        nombre: "Tecuala",
        casillas: 62,
        listadoNominal: 29221,
        actasTotal: 186,
        actasRecibidas: 95,
        porcentaje: (1 / 186) * 95,
      },
      {
        id: 17,
        nombre: "Tepic",
        casillas: 592,
        listadoNominal: 315417,
        actasTotal: 1776,
        actasRecibidas: 690,
        porcentaje: (1 / 1776) * 690,
      },
      {
        id: 18,
        nombre: "Tuxpan",
        casillas: 50,
        listadoNominal: 23538,
        actasTotal: 150,
        actasRecibidas: 95,
        porcentaje: (1 / 150) * 95,
      },
      {
        id: 19,
        nombre: "Xalisco",
        casillas: 73,
        listadoNominal: 44364,
        actasTotal: 219,
        actasRecibidas: 60,
        porcentaje: (1 / 219) * 60,
      },
      {
        id: 20,
        nombre: "La Yesca",
        casillas: 40,
        listadoNominal: 8349,
        actasTotal: 120,
        actasRecibidas: 0,
        porcentaje: (1 / 120) * 0,
      },
    ],
  }),
  actions: {},
});
