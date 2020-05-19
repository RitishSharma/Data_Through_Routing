import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ DataComponent } from './dataComponent/dataComponent.component';
import { HomeComponent } from './homeComponent/homeComponent.component';

const routes: Routes = [
  {
    path: '' , redirectTo: 'Home', pathMatch: 'full'
  },
  {
    path : 'Home', component: HomeComponent
  },
  {
    path : 'Phones',
    component: DataComponent
  },
  {
    path : 'Laptop',
    component: DataComponent
  }
  
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
 }
