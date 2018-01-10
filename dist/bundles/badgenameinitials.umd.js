(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.badgenameinitials = {}),global.ng.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

var template = '<span class="m-badge m-badge--brand m-badge--wide field-tip">{{initials}}<span class="tip-content">{{value}}</span></span>';
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
    BadgeNameInitialsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'badge-name',
                    styles: [style],
                    template: template
                },] },
    ];
    /** @nocollapse */
    BadgeNameInitialsComponent.ctorParameters = function () { return []; };
    BadgeNameInitialsComponent.propDecorators = {
        "value": [{ type: core.Input },],
    };
    return BadgeNameInitialsComponent;
}());

var BadgeNameInitialsModule = /** @class */ (function () {
    function BadgeNameInitialsModule() {
    }
    BadgeNameInitialsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        BadgeNameInitialsComponent
                    ],
                    exports: [
                        BadgeNameInitialsComponent
                    ],
                    entryComponents: [
                        BadgeNameInitialsComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    BadgeNameInitialsModule.ctorParameters = function () { return []; };
    return BadgeNameInitialsModule;
}());

exports.BadgeNameInitialsModule = BadgeNameInitialsModule;
exports.BadgeNameInitialsComponent = BadgeNameInitialsComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
