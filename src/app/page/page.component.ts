import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    page$: Observable<any>;

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

    constructor(
            private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.page$ = this.route.params.pipe(
                map(params => this.pages.find(page => page.id.toString() === params.id)),
        );
    }

}
