import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  styles: [`

  /* Hover tooltips */
  .field-tip {
    position:relative;
  }
  
  .field-tip .tip-content {
    cursor: default !important;
    position:absolute;
    top:-10px; /* - top padding */
    right:9999px;   
    margin-left: auto; margin-right: 0;
    padding:10px;
    color:#fff;
    width: 200px;
    background:#333;
      -webkit-box-shadow:2px 2px 5px #aaa;
      -moz-box-shadow:2px 2px 5px #aaa; 
    box-shadow:2px 2px 5px #aaa;
    opacity:0;
      -webkit-transition:opacity 250ms ease-out;
      -moz-transition:opacity 250ms ease-out;
      -ms-transition:opacity 250ms ease-out;
      -o-transition:opacity 250ms ease-out;
    transition:opacity 250ms ease-out;
    z-index: 1000;
  }
  
  .field-tip:hover .tip-content {
    right: -85px;
    opacity: 1;
    z-index: 1000;
  }

  `],
  template: `
  <span class="m-badge m-badge--brand m-badge--wide field-tip">
    {{initials}}
    <span class="tip-content">{{value}}</span>
  </span>
    `
})
export class BadgeNameInitialsComponent implements ViewCell, OnInit {
  rowData: any;

  @Input() value: string;
  initials: string = "";

  ngOnInit() {
    this.initials = this.getNameInitials(this.value);
  }

  //Get names's initials
  getNameInitials(fullName: string): string {

    if (fullName === null) { return ""; }

    let splitedName = fullName.split(" ");

    //only show the first 3 initials
    let contador = splitedName.length > 3 ? 3 : splitedName.length;

    for (let i = 0; i < contador; i++) {
      //if the name has "de" preposition, it's not considered
      if (splitedName[i].toUpperCase() != "DE") {
        this.initials = this.initials + splitedName[i].charAt(0).toUpperCase() + ".";
      }
    }
    return this.initials;
  }
}
