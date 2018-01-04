"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BadgeNameInitialsComponent = /** @class */ (function () {
    function BadgeNameInitialsComponent() {
        this.initials = "";
    }
    BadgeNameInitialsComponent.prototype.ngOnInit = function () {
        this.initials = this.getNameInitials(this.value);
    };
    //Get names's initials
    BadgeNameInitialsComponent.prototype.getNameInitials = function (fullName) {
        if (fullName === null) {
            return "";
        }
        var splitedName = fullName.split(" ");
        //only show the first 3 initials
        var contador = splitedName.length > 3 ? 3 : splitedName.length;
        for (var i = 0; i < contador; i++) {
            //if the name has "de" preposition, it's not considered
            if (splitedName[i].toUpperCase() != "DE") {
                this.initials = this.initials + splitedName[i].charAt(0).toUpperCase() + ".";
            }
        }
        return this.initials;
    };
    __decorate([
        core_1.Input()
    ], BadgeNameInitialsComponent.prototype, "value", void 0);
    BadgeNameInitialsComponent = __decorate([
        core_1.Component({
            styles: ["\n\n  /* Hover tooltips */\n  .field-tip {\n    position:relative;\n  }\n  \n  .field-tip .tip-content {\n    cursor: default !important;\n    position:absolute;\n    top:-10px; /* - top padding */\n    right:9999px;   \n    margin-left: auto; margin-right: 0;\n    padding:10px;\n    color:#fff;\n    width: 200px;\n    background:#333;\n      -webkit-box-shadow:2px 2px 5px #aaa;\n      -moz-box-shadow:2px 2px 5px #aaa; \n    box-shadow:2px 2px 5px #aaa;\n    opacity:0;\n      -webkit-transition:opacity 250ms ease-out;\n      -moz-transition:opacity 250ms ease-out;\n      -ms-transition:opacity 250ms ease-out;\n      -o-transition:opacity 250ms ease-out;\n    transition:opacity 250ms ease-out;\n    z-index: 1000;\n  }\n  \n  .field-tip:hover .tip-content {\n    right: -85px;\n    opacity: 1;\n    z-index: 1000;\n  }\n\n  "],
            template: "\n  <span class=\"m-badge m-badge--brand m-badge--wide field-tip\">\n    {{iniciais}}\n    <span class=\"tip-content\">{{value}}</span>\n  </span>\n    "
        })
    ], BadgeNameInitialsComponent);
    return BadgeNameInitialsComponent;
}());
exports.BadgeNameInitialsComponent = BadgeNameInitialsComponent;
