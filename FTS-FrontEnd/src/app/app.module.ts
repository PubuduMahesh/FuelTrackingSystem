import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ProductListComponent} from './Products/product-list.component';
import {ConvertToSpacesPipe} from './shared/convtert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {WelcomeComponent} from './home/welcome.component';
import { FuelChartComponent } from './fuel/fuel-chart.component';
import { NewFuelChargeComponent } from './fuel/new-fuel-charge/new-fuel-charge.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    FuelChartComponent,
    NewFuelChargeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    RouterModule.forRoot([
    {path: 'new-fuel-charge', component: NewFuelChargeComponent},
    {path: 'fuel-chart', component: FuelChartComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
