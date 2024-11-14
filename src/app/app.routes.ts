import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { PasswordpolicyComponent } from './pages/passwordpolicy/passwordpolicy.component';
import { NgModule } from '@angular/core';
import { AnalyticsComponent } from './pages/analytics/analytics.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },

      { path: 'product-manager', component: DashboardComponent },
      {
        path: 'product-manager/policy-password',
        component: PasswordpolicyComponent,
      },

      { path: 'analytics', component: AnalyticsComponent },
    ],
  },
];
