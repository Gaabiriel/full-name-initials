import { Component, NgModule } from '@angular/core';
import { BadgeNameInitialsComponent } from './badge-name-initials.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
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
})
export class BadgeNameInitialsModule { }