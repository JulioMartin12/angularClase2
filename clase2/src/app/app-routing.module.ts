import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { CheckoutPageComponent } from './checkout/checkout-page/checkout-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    // localhost:4200
  path: 'home',
  component:HomePageComponent
  },
  {
    // localhost:4200/profile
    path: 'profile',
    loadChildren:() => import('./profile/profile.module').then(m => m.ProfileModule)
    
  },
  { 
  path: 'checkout',
  component: CheckoutPageComponent

},
{
  path: '**',
  component: PageNotFoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
