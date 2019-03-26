import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodas(): Tarefa[] {
    const tarefas = localStorage['tarefas']
    return tarefas ? JSON.parse(tarefas) : []
  }
}
