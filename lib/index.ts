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
  <span class="m-badge m-badge--brand m-badge--wide" attr.aria-label="{{value}}">{{initials}}</span>
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
