import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum, ParamRouteEnum } from '@core';
import { MainLayoutComponent } from '@layouts/main';

const routes: Routes = [
  {
    path: '', 
    component: MainLayoutComponent,
    children: [
    {
      path: '',
      redirectTo: AppRouteEnum.Dashboard,
      pathMatch: 'full'
    },
    {
      path: AppRouteEnum.Dashboard, 
      loadChildren: () => import('./pages/dashboard/dashboard.module')
        .then(m => m.DashboardModule)
    },
    {
      path: AppRouteEnum.Login,
      loadChildren: () => import('./pages/login/login.module')
      .then(m => m.LoginModule)
    },
    {
      path: AppRouteEnum.Edit,
      loadChildren: () => import('./pages/edit/edit.module')
      .then(m => m.EditModule)
    },
    {
      path: `${AppRouteEnum.Player}/${ParamRouteEnum.Player}`, 
      loadChildren: () => import('./pages/player/player.module')
        .then(m => m.PlayerModule)
    },
    {
      path: '**',
      redirectTo: AppRouteEnum.Dashboard
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
