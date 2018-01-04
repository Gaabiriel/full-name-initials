import { OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
export declare class BadgeNameInitialsComponent implements ViewCell, OnInit {
    rowData: any;
    value: string;
    initials: string;
    ngOnInit(): void;
    getNameInitials(fullName: string): string;
}
