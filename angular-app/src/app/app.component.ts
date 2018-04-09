import { Component } from '@angular/core';
import { Ocorrencia } from './ocorrencia.model';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = null;
  matricula = null;
  nomeAluno = null;
  tipoOcorrencia = null;
  criar_ok = false;
  tipo1 = null;
  tipo2 = null;
  tipo3 = null;
  tipo4 = null;
  media1: number = null;
  media2: number = null;
  media3: number = null;
  media4: number = null;

  ocorrencias = [
    new Ocorrencia('2018/03/23', 201801, 'Ana Souza', 'indisciplina em sala de aula'),
    new Ocorrencia('2018/03/23', 201801, 'Bruno Cardoso', 'comportamento inadequado com os colegas'),
    new Ocorrencia('2018/03/23', 201801, 'Carlos Rodrigues', 'baixo índice de rendimento'),
    new Ocorrencia('2018/03/23', 201801, 'Débora Silva', 'indicação de atenção por assunto familiar, psicológico ou social'),
  ];

  
  criar() {
    const oc = new Ocorrencia(this.data, this.matricula, this.nomeAluno, this.tipoOcorrencia);
    this.ocorrencias.push(oc);
    this.data = null;
    this.matricula = null;
    this.nomeAluno = null;
    this.tipoOcorrencia = null;
    this.criar_ok = true;

  }

  ocorrenciasTipo() {
    let cont1: number = 0;
    let cont2: number = 0;
    let cont3: number = 0;
    let cont4: number = 0;
    let contTudo: number = 0;
    for (let i = 0; i < this.ocorrencias.length; i++) {
      if (this.tipoOcorrencia == 'indisciplina em sala de aula') {
        cont1++;
      }
      if (this.tipoOcorrencia == 'comportamento inadequado com os colegas') {
        cont2++;
      }
      if (this.tipoOcorrencia == 'baixo índice de rendimento') {
        cont3++;
      }
      if (this.tipoOcorrencia == 'indicação de atenção por assunto familiar, psicológico ou social') {
        cont4++;
      }
      contTudo = cont1 + cont2 + cont3 + cont4;
      this.media1 = cont1 * contTudo / 100;
      this.media2 = cont2 * contTudo / 100;
      this.media3 = cont3 * contTudo / 100;
      this.media4 = cont4 * contTudo / 100;
    }

  }
  

}



