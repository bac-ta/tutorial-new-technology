import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {HeroDetailComponent} from '../components/hero-detail/hero-detail.component';
import {HeroesComponent} from '../components/heroes/heroes.component';


const routes: Routes = [{
  path: '', redirectTo: '/dashboard', pathMatch: 'full'
},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule {
}
