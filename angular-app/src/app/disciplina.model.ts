import {Professor} from './professor.model'
export class Disciplina {
    codigo: string;
    nome: string;
    professor: Professor;
    descricao: string;
  
    constructor(codigo: string, nome: string, professor: Professor, descricao?: string) {
      this.codigo = codigo;
      this.nome = nome;
      this.professor = professor;
      this.descricao = descricao;
    }
  }
  