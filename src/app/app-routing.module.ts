import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '', loadChildren: './pages/private/private.module#PrivateModule' },
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
