import { Component } from '@angular/core';
import { DragulaService } from "ng2-dragula";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  widgets: Conteudo[] = [
    { id:1, nome: "Título", icone: "folder"},
    { id:2, nome: "Subtítulo", icone: "folder"},
    { id:3, nome: "Parágrafo", icone: "folder"},
    { id:4, nome: "Enquete", icone: "folder"},
    { id:5, nome: "Foto", icone: "folder"},
    { id:6, nome: "Galeria", icone: "folder"},
    { id:7, nome: "Vídeo", icone: "folder"}
  ];

  conteudos: Conteudo[] = [];

  constructor(private dragulaService: DragulaService){
    dragulaService.setOptions('conteudos', {
      copy: true,
      copySortSource: true,
      removeOnSpill: true,
      revertOnSpill:true,
      accepts: function (el, target, source, sibling) {
        return ! target.hasAttribute('dragulaNoDrop')
      },
    });
  }
}

export interface Conteudo {
  id: number,
  nome: string,
  icone: string
}
