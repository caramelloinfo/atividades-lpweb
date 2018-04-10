import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import {DisciplinaService} from './services/disciplina.service';
import { ItemDisciplinaComponent } from './components/item-disciplina/item-disciplina.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormInputComponent,
    ItemDisciplinaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DisciplinaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}