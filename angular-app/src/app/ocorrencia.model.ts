export class Ocorrencia {
    data: string;
    matricula: number;
    nomeAluno: string;
    tipoOcorrencia: string;
     
    constructor(data: string, matricula: number, nomeAluno: string, tipoOcorrencia: string ) {
      this.data = data;
      this.matricula = matricula;
      this.nomeAluno = nomeAluno;
      this.tipoOcorrencia = tipoOcorrencia;
    }
  }