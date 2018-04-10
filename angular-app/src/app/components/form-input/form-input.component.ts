import { Component, OnInit } from '@angular/core';
import {DisciplinaService} from '../../services/disciplina.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  private nome: string;


  constructor(private disciplinaService: DisciplinaService) {
    this.nome = '';
   }

  ngOnInit() {
  }

  private addDisciplina(): void{
    this.disciplinaService.addDisciplina(this.nome);
    this.nome = '';
  }

}
