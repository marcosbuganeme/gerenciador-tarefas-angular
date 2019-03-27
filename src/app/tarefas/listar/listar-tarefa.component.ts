import { Component, OnInit } from '@angular/core'

import { Tarefa } from '../shared/tarefa.model'
import { TarefaService } from '../shared/tarefa.service'

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[]

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.tarefaService.findAll()
  }

  findAll(): Tarefa[] {
    return this.tarefaService.findAll()
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault()
    if (confirm('Deseja remover a tarefa"' + tarefa.nome + '"?'))
    this.tarefaService.delete(tarefa.id)
    this.tarefas = this.findAll()
  }
}
