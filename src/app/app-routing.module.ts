import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'landing', loadChildren: './pages/public/landing/landing.module#LandingPageModule' },
  { path: 'verify-mail', loadChildren: './pages/public/verify-mail/verify-mail.module#VerifyMailPageModule' },
  { path: 'about', loadChildren: './pages/public/about/about.module#AboutPageModule' },
  { path: 'contact', loadChildren: './pages/public/contact/contact.module#ContactPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
