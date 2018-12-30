import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPage } from './landing.page';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule, MatInputModule, MatProgressBarModule, MatCardModule, MatIconModule } from '@angular/material';


const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTabsModule, MatButtonModule, MatInputModule, MatProgressBarModule,
    MatCardModule, MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LandingPage, LoginComponent, SignupComponent],
})
export class LandingPageModule {}
