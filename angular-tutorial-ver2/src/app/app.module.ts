import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetail } from './components/hero-detail/hero-detail.component';
import { HeroSearch } from './components/hero-search/hero-search.component/hero-search.component.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetail.ComponentComponent,
    HeroSearch.ComponentComponent,
    HeroSearchComponent,
    DashboardComponent,
    MessagesComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
