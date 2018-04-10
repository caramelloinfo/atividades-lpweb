import { Component, OnInit, Input} from '@angular/core';
import {Disciplina} from '../../classes/disciplina';
import {DisciplinaService} from '../../services/disciplina.service';

@Component({
  selector: 'app-item-disciplina',
  templateUrl: './item-disciplina.component.html',
  styleUrls: ['./item-disciplina.component.css']
})
export class ItemDisciplinaComponent implements OnInit {

  @Input()
  private disciplina: Disciplina;

  constructor(private disciplinaService: DisciplinaService) { }

  ngOnInit() {
  }

  private removeDisciplina(): void{
    this.disciplinaService.removeDisciplina(this.disciplina.codigo);
  }

}
