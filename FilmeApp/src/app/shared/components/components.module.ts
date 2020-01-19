import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VMessageModule } from './vmessage/vmessage.module';
import { CancelButtonModule } from './cancel-button/cancel-button.module';

@NgModule({
    imports: [
        CommonModule,
        VMessageModule,
        CancelButtonModule
    ],
    exports: [
        VMessageModule,
        CancelButtonModule
    ]
})
export class ComponentsModule{}