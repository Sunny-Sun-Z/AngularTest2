import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule } from './hero/hero.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HeroModule,
    DashboardModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, {dataEncapsulation:false}
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

