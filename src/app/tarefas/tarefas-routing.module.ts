import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ListarTarefaComponent } from './listar/listar-tarefa.component'
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component'
import { EditarTarefaComponent } from './editar/editar-tarefa.component'

export const TarefaRoutes: Routes = [
    {
      path: 'tarefas',
      redirectTo: 'tarefas/listar'
    },
    {
      path: 'tarefas/listar',
      component: ListarTarefaComponent
    },
    {
      path: 'tarefas/cadastrar',
      component: CadastrarTarefaComponent
    },
    {
      path: 'tarefas/editar/:id',
      component: EditarTarefaComponent
    }
  ];