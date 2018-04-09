export class Ocorrencia {
    data: string;
    matricula: number;
    nomeAluno: string;
    tipoOcorrencia: string;
    paisResp?: string;
     
    constructor(data: string, matricula: number, nomeAluno: string, tipoOcorrencia: string, paisResp?: string ) {
      this.data = data;
      this.matricula = matricula;
      this.nomeAluno = nomeAluno;
      this.tipoOcorrencia = tipoOcorrencia;
      this.paisResp = paisResp;
    }
  }