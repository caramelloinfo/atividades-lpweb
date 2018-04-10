import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDisciplinaComponent } from './item-disciplina.component';

describe('ItemDisciplinaComponent', () => {
  let component: ItemDisciplinaComponent;
  let fixture: ComponentFixture<ItemDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
