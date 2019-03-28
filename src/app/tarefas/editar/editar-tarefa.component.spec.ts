import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarefaComponent } from './editar-tarefa.component';

describe('EditarTarefaComponent', () => {
  let component: EditarTarefaComponent;
  let fixture: ComponentFixture<EditarTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTarefaComponent ]
    })
    .compileComponents();
  }));

  it('deve criar o componente de edição', () => {
    expect(component).toBeTruthy();
  });
});
