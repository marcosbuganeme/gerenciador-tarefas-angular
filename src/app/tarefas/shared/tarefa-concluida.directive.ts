import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input()
  tarefaConcluida: boolean

  constructor(private renderer2: Renderer2, 
              private el: ElementRef) {}

  ngOnInit() {
    if (this.tarefaConcluida)
      this.renderer2.setStyle(this.el.nativeElement, "text-decoration", "line-through")
  }
}