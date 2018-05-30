import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { EditorDeDisciplinaComponent } from './editor-de-disciplina/editor-de-disciplina.component';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeDisciplinasComponent,
    EditorDeDisciplinaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [DisciplinasService],
  bootstrap: [AppComponent]
})
export class AppModule {
}