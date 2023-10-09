import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeroComponent } from './dashboard-hero.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';

const routs: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routs)
  ]
})
export class DashboardModule { }
