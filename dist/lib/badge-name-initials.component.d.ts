import { OnInit } from '@angular/core';
export declare class BadgeNameInitialsComponent implements OnInit {
    rowData: any;
    value: string;
    initials: string;
    ngOnInit(): void;
    getNameInitials(fullName: string): string;
}
