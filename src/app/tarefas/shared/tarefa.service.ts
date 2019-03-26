import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  findAll(): Tarefa[] {
    const tarefas = localStorage['tarefas']
    return tarefas ? JSON.parse(tarefas) : []
  }

  save(tarefa: Tarefa): void {
    const tarefas = this.findAll();
    tarefa.id = new Date().getTime()
    tarefas.push(tarefa)
    localStorage['tarefas'] = JSON.stringify(tarefas)
  }

  findById(id: number): Tarefa {
    const tarefas: Tarefa[] = this.findAll()
    return tarefas.find(tarefa => tarefa.id === id)
  }

  update(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.findAll()
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa
      }
    })

    localStorage['tarefas'] = JSON.stringify(tarefas)
  }

  delete(id: number): void {
    let tarefas: Tarefa[] = this.findAll()
    tarefas = tarefas.filter(tarefa => tarefa.id !== id)
    localStorage['tarefas'] = JSON.stringify(tarefas)
  }

  updateStatus(id: number): void {
    const tarefas: Tarefa[] = this.findAll()
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida
      }
    })

    localStorage['tarefas'] = JSON.stringify(tarefas)
  }
}