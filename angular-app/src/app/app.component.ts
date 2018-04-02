import {Component} from '@angular/core';

import {Disciplina} from './disciplina.model';
import {Professor} from './professor.model';

import {Ocorrencia} from './ocorrencia.model';
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

  codigo = null;
  nome = null;
  descricao = null;
  selecionado = null;

  ocorrencias = [
    new Ocorrencia('23/03/2018',201801, 'Ana Souza', 'indisciplina em sala de aula'),
    new Ocorrencia('23/03/2018',201801, 'Bruno Cardoso', 'comportamento inadequado com os colegas'),
    new Ocorrencia('23/03/2018',201801, 'Carlos Rodrigues', 'baixo índice de rendimento'),
    new Ocorrencia('23/03/2018',201801, 'Débora Silva', 'indicação de atenção por assunto familiar, psicológico ou social'),
  ];

  selecionar(disciplina) {
    this.selecionado = disciplina;
  }
  /*salvar(){
    this.codigo = null;
    this.nome = null;
    this.descricao = null;
    
  }
  */
  criar(){
    const oc = new Ocorrencia(this.data, this.matricula, this.nomeAluno, this.tipoOcorrencia);
    this.ocorrencias.push(oc);
    this.data = null;
    this.matricula = null;
    this.nomeAluno = null;
    this.tipoOcorrencia = null;
    
  }
  /*excluir(disciplina: Disciplina){
    for(let i=0; i < this.disciplinas.length; i++){
      if(this.disciplinas[i].codigo == disciplina.codigo){
        this.disciplinas.splice(i, 1);
        break;
      }
    }*/

  }
  
  
}
