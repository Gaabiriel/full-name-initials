import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
var template = '<span class="m-badge m-badge--brand m-badge--wide field-tip" [hidden]="isHidden">{{initials}}<span class="tip-content">{{value}}</span></span>';
var style = "\n  /* Hover tooltips */\n  .field-tip {\n    position:relative;\n  }\n  \n  .field-tip .tip-content {\n    cursor: default !important;\n    position:absolute;\n    top:-10px; /* - top padding */\n    right:9999px;   \n    margin-left: auto; margin-right: 0;\n    padding:10px;\n    color:#fff;\n    width: 200px;\n    background:#333;\n      -webkit-box-shadow:2px 2px 5px #aaa;\n      -moz-box-shadow:2px 2px 5px #aaa; \n    box-shadow:2px 2px 5px #aaa;\n    opacity:0;\n      -webkit-transition:opacity 250ms ease-out;\n      -moz-transition:opacity 250ms ease-out;\n      -ms-transition:opacity 250ms ease-out;\n      -o-transition:opacity 250ms ease-out;\n    transition:opacity 250ms ease-out;\n    z-index: 1000;\n  }\n  \n  .field-tip:hover .tip-content {\n    right: -85px;\n    opacity: 1;\n    z-index: 1000;\n  }\n  ";
var BadgeNameInitialsComponent = /** @class */ (function () {
    function BadgeNameInitialsComponent() {
        this.initials = "";
    }
    BadgeNameInitialsComponent.prototype.ngOnInit = function () {
        this.initials = this.getNameInitials(this.value);
    };
    //Get names's initials
    //Get names's initials
    BadgeNameInitialsComponent.prototype.getNameInitials = 
    //Get names's initials
    function (fullName) {
        if (fullName === null || fullName === undefined || fullName === "") {
            this.isHidden = true;
            return "";
        }
        else {
            var splitedName = fullName.split(" ");
            //only show the first 3 initials
            var contador = splitedName.length > 2 ? 2 : splitedName.length;
            for (var i = 0; i < contador; i++) {
                if (splitedName[i] != "") {
                    //if the name has "de","dos","da" preposition, it's not considered
                    if (splitedName[i].toUpperCase() != "DE" && splitedName[i].toUpperCase() != "DOS" && splitedName[i].toUpperCase() != "DA") {
                        this.initials = this.initials + splitedName[i].charAt(0).toUpperCase() + "";
                    }
                    else {
                        contador++;
                    }
                }
                else {
                    contador++;
                }
            }
            this.isHidden = false;
            return this.initials;
        }
    };
    BadgeNameInitialsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'badge-name',
                    styles: [style],
                    template: template
                },] },
    ];
    /** @nocollapse */
    BadgeNameInitialsComponent.ctorParameters = function () { return []; };
    BadgeNameInitialsComponent.propDecorators = {
        "value": [{ type: Input },],
    };
    return BadgeNameInitialsComponent;
}());
export { BadgeNameInitialsComponent };
//# sourceMappingURL=badge-name-initials.component.js.map