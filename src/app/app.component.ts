import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('routeAnimations', [
            transition('* <=> *', [
                group([
                    query(':enter', [
                        style({transform: 'translateX(100%)', position: 'absolute', width: '100%'}),
                        animate('1s ease-out', style({transform: 'translateX(0%)'}))
                    ], {optional: true}),
                    query(':leave', [
                        style({transform: 'translateX(0%)', position: 'absolute', width: '100%'}),
                        animate('1s ease-out', style({transform: 'translateX(-100%)'}))
                    ], {optional: true})
                ]),
            ]),
        ])
    ]
})
export class AppComponent {
    constructor(private router: Router) {
    }

    pages = [
        {
            id: 1,
            color: '#cccccc',
        },
        {
            id: 2,
            color: '#ff2525',
        },
        {
            id: 3,
            color: '#0cf510',
        },
        {
            id: 4,
            color: '#0c7df5',
        }
    ];

    goToPage(page: any): void {
        this.router.navigate(['/', page.id]).then();
    }

    getState(outlet: RouterOutlet): any {
        return (outlet && outlet.isActivated && outlet.activatedRoute) ? outlet.activatedRoute.snapshot.params.id:0;
    }
}
