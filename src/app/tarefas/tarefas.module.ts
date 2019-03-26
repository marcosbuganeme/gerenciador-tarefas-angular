import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';

@NgModule({
  declarations: [ListarTarefaComponent],
  imports: [
    CommonModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
