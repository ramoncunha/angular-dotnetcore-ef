import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cancel-button',
    templateUrl: './cancel-button.component.html'
})
export class CancelButtonComponent {
    
    constructor(private router: Router){}

    cancel(): void {
        this.router.navigate(['filmes']);
    }
}