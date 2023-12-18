import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCaptura = defineStore("captura", {
  state: () => ({
    complementaria: {
      id: null,
      sobrantes: 0,
      votos_Ciudadanos: 0,
      votos_Representantes: 0,
      votos_Urnas: 0,
      total_Votos: 0,
      incidentes: false,
      descripcion_incidentes: null,
      id_Estatus: 0,
    },
    listSecciones: [
      {
        id: 1,
        seccion: "0115",
        seccionId: 1,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 2,
        seccion: "0115",
        seccionId: 1,
        tipo: "Contigua 1",
        tipoId: 2,
        numero_Casilla: 1,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 3,
        seccion: "0116",
        seccionId: 2,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 4,
        seccion: "0117",
        seccionId: 3,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 5,
        seccion: "0118",
        seccionId: 4,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 6,
        seccion: "0119",
        seccionId: 5,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 7,
        seccion: "0120",
        seccionId: 6,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 8,
        seccion: "0121",
        seccionId: 7,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 9,
        seccion: "0122",
        seccionId: 8,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 10,
        seccion: "0123",
        seccionId: 9,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 11,
        seccion: "0123",
        seccionId: 9,
        tipo: "Contigua 1",
        tipoId: 2,
        numero_Casilla: 1,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 12,
        seccion: "0123",
        seccionId: 9,
        tipo: "Contigua 2",
        tipoId: 2,
        numero_Casilla: 2,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 13,
        seccion: "0124",
        seccionId: 10,
        tipo: "Especial",
        tipoId: 4,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 14,
        seccion: "0125",
        seccionId: 11,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 15,
        seccion: "0126",
        seccionId: 12,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 16,
        seccion: "0127",
        seccionId: 13,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 17,
        seccion: "0128",
        seccionId: 14,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 18,
        seccion: "0129",
        seccionId: 15,
        tipo: "Especial",
        tipoId: 4,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 19,
        seccion: "0130",
        seccionId: 16,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
      {
        id: 20,
        seccion: "0131",
        seccionId: 17,
        tipo: "Basica",
        tipoId: 1,
        numero_Casilla: 0,
        votantes: 689,
        complementaria_Pys: false,
        complementaria_Dip: false,
        complementaria_Reg: false,
        capturada_Pys: false,
        capturada_Dip: false,
        capturada_Reg: false,
        causales: false,
      },
    ],
    listaPartidos: [
      {
        id: 1,
        logo: require("../assets/01-PAN.png"),
        nombre: "PAN",
        inputValue: 0,
      },
      {
        id: 2,
        logo: require("../assets/02-PRI.png"),
        nombre: "PRI",
        inputValue: 0,
      },
      {
        id: 3,
        logo: require("../assets/03-PRD.png"),
        nombre: "PRD",
        inputValue: 0,
      },
      {
        id: 4,
        logo: require("../assets/04-PT.png"),
        nombre: "PT",
        inputValue: 0,
      },
      {
        id: 5,
        logo: require("../assets/05-PVEM.png"),
        nombre: "PVEM",
        inputValue: 0,
      },
      {
        id: 6,
        logo: require("../assets/06-MC.png"),
        nombre: "MC",
        inputValue: 0,
      },
      {
        id: 7,
        logo: require("../assets/07-MORENA.png"),
        nombre: "MORENA",
        inputValue: 0,
      },
      {
        id: 8,
        logo: require("../assets/08-NAN.png"),
        nombre: "NAN",
        inputValue: 0,
      },
      {
        id: 9,
        logo: require("../assets/09-MLN.png"),
        nombre: "MLN",
        inputValue: 0,
      },
      {
        id: 10,
        logo: require("../assets/10-FXMN.png"),
        nombre: "FXMN",
        inputValue: 0,
      },
      {
        id: 11,
        logo: require("../assets/11-RSPN.png"),
        nombre: "RSPN",
        inputValue: 0,
      },
    ],

    listaComplementoVoto: [
      { id: 1, nombre: "Candidatos no registrados", inputValue: 0 },
      { id: 2, nombre: "Votos nulos", inputValue: 0 },
      { id: 3, nombre: "Total de votos", inputValue: 0 },
    ],

    listTipoCasillas: [
      { value: 1, label: "Basica" },
      { value: 2, label: "Contigua" },
      { value: 3, label: "Extraordinaria" },
      { value: 4, label: "Especial" },
    ],
    listNumeroSeccion: [
      { value: 1, label: "0115" },
      { value: 2, label: "0116" },
      { value: 3, label: "0117" },
      { value: 4, label: "0118" },
      { value: 5, label: "0119" },
      { value: 6, label: "0120" },
      { value: 7, label: "0121" },
      { value: 8, label: "0122" },
      { value: 9, label: "0123" },
      { value: 10, label: "0124" },
      { value: 11, label: "0125" },
      { value: 12, label: "0126" },
      { value: 13, label: "0127" },
      { value: 14, label: "0128" },
      { value: 15, label: "0129" },
      { value: 16, label: "0130" },
      { value: 17, label: "0131" },
    ],
    listaElecciones: [
      { value: 1, label: "Presidencia y Sindicatura" },
      { value: 2, label: "Diputaciones" },
      { value: 3, label: "Regidurias" },
    ],
    estatusActas: [
      { value: 1, label: "No se instaló la casilla" },
      { value: 2, label: "No se recibió el paquete electoral" },
      { value: 3, label: "El paquete electoral fue entregado sin el AEC" },
      { value: 4, label: "Votación para un solo partvalueo, coalición o CI" },
      { value: 5, label: "Los resultados en el AEC, no coincvalueen" },
      { value: 6, label: "AEC levantada en casilla" },
      { value: 7, label: "AEC ilegible" },
      { value: 8, label: "AEC con espacios en blanco" },
      { value: 9, label: "AEC con alteraciones evvalueentes" },
      {
        value: 10,
        label: "AEC con errores o con inconsistencias evidentes",
      },
    ],
    listaSecciones: [],
    isCapturaVotos: false,
    isConsulta: false,
    informacionComplementaria: [],
    resultadosVotaciones: [],
    resultadosComplementoVotacion: [],
    consultaInformacionComplementaria: [],
    consultaResultadoVotaciones: [],
    consultaResultadoComplementoVotaciones: [],
  }),
  actions: {
    async initVotaciones() {
      for (let i = 0; i < this.listaPartidos.length; i++) {
        this.listaPartidos[i].inputValue = 0;
      }
      for (let j = 0; j < this.listaComplementoVoto.length; j++) {
        this.listaComplementoVoto[j].inputValue = 0;
      }
    },

    async initComplementaria() {
      this.complementaria.id = null;
      this.complementaria.sobrantes = 0;
      this.complementaria.votos_Ciudadanos = 0;
      this.complementaria.votos_Representantes = 0;
      this.complementaria.votos_Urnas = 0;
      this.complementaria.total_Votos = 0;
      this.complementaria.incidentes = false;
      this.complementaria.descripcion_incidentes = null;
      this.complementaria.id_Estatus = 0;
    },

    async actualizarCasillaVotos(index, eleccion) {
      if (eleccion == 1) {
        this.listSecciones[index].capturada_Pys = true;
      } else if (eleccion == 2) {
        this.listSecciones[index].capturada_Dip = true;
      } else if (eleccion == 3) {
        this.listSecciones[index].capturada_Reg = true;
      }
    },
    async actualizarCasillaComplementaria(index, eleccion) {
      if (eleccion == 1) {
        this.listSecciones[index].complementaria_Pys = true;
      } else if (eleccion == 2) {
        this.listSecciones[index].complementaria_Dip = true;
      } else if (eleccion == 3) {
        this.listSecciones[index].complementaria_Reg = true;
      }
    },

    async createInformacionComplementarias(
      complementaria,
      idEleccion,
      idSeccion,
      idCasilla
    ) {
      try {
        this.informacionComplementaria.push({
          eleccion: idEleccion,
          seccion: idSeccion,
          casilla: idCasilla,
          sobrantes: parseInt(complementaria.sobrantes),
          votos_Ciudadanos: parseInt(complementaria.votos_Ciudadanos),
          votos_Representantes: parseInt(complementaria.votos_Representantes),
          votos_Urnas: parseInt(complementaria.votos_Urnas),
          total_Votos: complementaria.total_Votos,
          incidentes: complementaria.incidentes,
          descripcion_incidentes: complementaria.descripcion_incidentes,
          id_Estatus: complementaria.id_Estatus.value,
        });

        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async createVotacion(votos, idEleccion, idSeccion, idCasilla) {
      try {
        votos.forEach((votacion) => {
          this.resultadosVotaciones.push({
            eleccion: idEleccion,
            seccion: idSeccion,
            casilla: idCasilla,
            partido: votacion.id,
            partido_nombre: votacion.nombre,
            votos: votacion.inputValue,
          });
        });
        return true;
      } catch (error) {
        console.error;
      }
    },

    async createComplementoVoto(votos, idEleccion, idSeccion, idCasilla) {
      try {
        votos.forEach((votacion) => {
          this.resultadosComplementoVotacion.push({
            eleccion: idEleccion,
            seccion: idSeccion,
            casilla: idCasilla,
            complemento: votacion.nombre,
            votos: votacion.inputValue,
          });
        });
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async createCausales(votos, complemento) {
      let listaPrevia = votos;
      listaPrevia.sort((a, b) => b.inputValue - a.inputValue);
    },

    async loadSecciones(id) {
      let listadoSecciones = this.listSecciones.map((secciones) => {
        let captura = null;
        let complementariaCaptura = null;
        switch (id) {
          case 1:
            captura = secciones.capturada_Pys;
            complementariaCaptura = secciones.complementaria_Pys;
            break;
          case 2:
            captura = secciones.capturada_Dip;
            complementariaCaptura = secciones.complementaria_Dip;
            break;
          case 3:
            captura = secciones.capturada_Reg;
            complementariaCaptura = secciones.complementaria_Reg;
            break;
        }

        return {
          id: secciones.id,
          seccion: secciones.seccion,
          seccionId: secciones.seccionId,
          tipo: secciones.tipo,
          tipoId: secciones.tipoId,
          votantes: secciones.votantes,
          capturada: captura,
          complementariaCaptura: complementariaCaptura,
          causales: secciones.causales,
        };
      });
      this.listaSecciones = listadoSecciones;
    },
    async loadResultados(eleccion, seccion, casilla) {
      this.consultaResultadoVotaciones = [];
      this.consultaResultadoComplementoVotaciones = [];

      let resultadosVotos = this.resultadosVotaciones.filter(
        (x) =>
          x.eleccion == eleccion && x.seccion == seccion && x.casilla == casilla
      );

      resultadosVotos.forEach((votos) => {
        let logo = this.listaPartidos.find((x) => x.id == votos.partido);
        this.consultaResultadoVotaciones.push({
          logo: logo.logo,
          nombre: votos.partido_nombre,
          inputValue: parseInt(votos.votos),
        });
      });

      let resultadosVotosComplemento =
        this.resultadosComplementoVotacion.filter(
          (x) =>
            x.eleccion == eleccion &&
            x.seccion == seccion &&
            x.casilla == casilla
        );
      resultadosVotosComplemento.forEach((complemento) => {
        console.log("Esto es complemento", complemento);
        this.consultaResultadoComplementoVotaciones.push({
          nombre: complemento.complemento,
          inputValue: parseInt(complemento.votos),
        });
      });
    },
    async actualizarIsCapturaVotos(valor) {
      this.isCapturaVotos = valor;
    },
    async actualizarIsConsulta(valor) {
      this.isConsulta = valor;
    },
  },
});
