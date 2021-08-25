import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './strategy/route-reuse.strategy';

@NgModule({
    declarations: [
        AppComponent,
        PageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
