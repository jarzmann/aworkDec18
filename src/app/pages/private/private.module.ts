import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateComponent } from './private.component';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from '../../shared/components/header/header.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [DashboardComponent, PrivateComponent, HeaderComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    IonicModule
  ]
})
export class PrivateModule { }
