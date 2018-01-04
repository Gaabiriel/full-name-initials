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
            styles: ["\n  span:hover {\n    position: relative;\n    cursor: default !important;\n  }\n  \n  span[aria-label]:hover:after {\n    content: attr(aria-label);\n    padding: 4px 8px;\n    position: absolute;\n    left: 0;\n    bottom: 100%;\n    white-space: nowrap;\n    font-size: 1rem;\n    border-radius: 30px;\n    color: grey;\n    background: white;\n    -webkit-box-shadow: 0px 1px 15px 1px rgba(113, 106, 202, 0.25);\n    -moz-box-shadow: 0px 1px 15px 1px rgba(113, 106, 202, 0.25);\n    box-shadow: 0px 1px 15px 1px rgba(113, 106, 202, 0.25); \n    border: rgb(116, 49, 49) 1px;\n    z-index: 100;\n  }\n  "],
            template: "\n  <span class=\"m-badge m-badge--brand m-badge--wide\" attr.aria-label=\"{{value}}\">{{initials}}</span>\n    "
        })
    ], BadgeNameInitialsComponent);
    return BadgeNameInitialsComponent;
}());
exports.BadgeNameInitialsComponent = BadgeNameInitialsComponent;
