import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelButtonComponent } from './cancel-button.component';

@NgModule({
    declarations: [
        CancelButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CancelButtonComponent
    ]
})
export class CancelButtonModule{}