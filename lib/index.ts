import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  styles: [`
  span:hover {
    position: relative;
    cursor: default !important;
  }
  
  span[aria-label]:hover:after {
    content: attr(aria-label);
    padding: 4px 8px;
    position: absolute;
    left: 0;
    bottom: 100%;
    white-space: nowrap;
    font-size: 1rem;
    border-radius: 30px;
    color: grey;
    background: white;
    -webkit-box-shadow: 0px 1px 15px 1px rgba(113, 106, 202, 0.25);
    -moz-box-shadow: 0px 1px 15px 1px rgba(113, 106, 202, 0.25);
    box-shadow: 0px 1px 15px 1px rgba(113, 106, 202, 0.25); 
    border: rgb(116, 49, 49) 1px;
    z-index: 100;
  }
  `],
  template: `
  <span class="m-badge m-badge--brand m-badge--wide" attr.aria-label="{{value}}">{{iniciais}}</span>
    `
})
export class NameInitialsComponent implements ViewCell, OnInit {
    rowData: any;

  @Input() value: string;
  iniciais: string = "";

  ngOnInit() {
    this.iniciais = this.getNameInitials(this.value);
  }
  //Pega as iniciais dos nomes.
  getNameInitials(nomeCompleto: string): string {

    if (nomeCompleto === null) { return ""; }

    let nomeSeparado = nomeCompleto.split(" ");

    //limita para mostrar somente as 3 primeiras iniciais
    let contador = nomeSeparado.length > 3 ? 3 : nomeSeparado.length;

    for (let i = 0; i < contador; i++) {
      //caso o nome tenha o 'de', o mesmo é ignorado
      if (nomeSeparado[i].toUpperCase() != "DE") {
        this.iniciais = this.iniciais + nomeSeparado[i].charAt(0).toUpperCase() + ".";
      }
    }

    return this.iniciais;
  }
}
