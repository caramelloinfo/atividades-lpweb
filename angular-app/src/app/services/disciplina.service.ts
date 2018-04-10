import { Injectable } from '@angular/core';
import { Disciplina } from '../classes/disciplina';

@Injectable()
export class DisciplinaService {

  private nextCodigo: number;

  constructor() { 
    let disciplinas = this.getDisciplinas();

    if (disciplinas.length === 0){
      this.nextCodigo = 0;
    }else{
      let maxCodigo = disciplinas[disciplinas.length -1].codigo;
      this.nextCodigo = maxCodigo +1;
    }
  }

  public addDisciplina(nome: string): void{
    //console.log(this.disciplinas);
    let disciplina = new Disciplina(this.nextCodigo, nome);
    let disciplinas = this.getDisciplinas();
    disciplinas.push(disciplina);

    this.setLocalStorageDisciplinas(disciplinas);
    this.nextCodigo++;
  }

  public getDisciplinas(): Disciplina[] {
    let localStorageItem = JSON.parse(localStorage.getItem('disciplina'));
    return localStorageItem == null ? [] : localStorageItem.disciplinas;

  }
  
  public removeDisciplina(codigo: number): void{ 
    let disciplinas = this.getDisciplinas();
    disciplinas = disciplinas.filter((disciplina) => disciplina.codigo !== codigo);
    this.setLocalStorageDisciplinas(disciplinas);
  }

  private setLocalStorageDisciplinas(disciplinas: Disciplina[]): void{
    localStorage.setItem('disciplinas', JSON.stringify({disciplinas: disciplinas}))
  }

}
