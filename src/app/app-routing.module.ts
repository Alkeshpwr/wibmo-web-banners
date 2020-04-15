import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoginLayoutComponent } from './layouts/loginlayout/loginlayout.component';
import { FullComponent } from "./layouts/full/full.component";
import { EnsureAuthenticated } from "./service/ensure-authenticated.service";
import { LoginRedirect } from "./service/login-redirect.service";
//import { Permissions } from "./service/permission.service";
import { errorPageComponent } from './common/error-page/error-page.component';
//import { NotFoundComponent } from './common/404/not-found.component';
//import { ParentPermissions } from './service/parentPermission.service';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        component: LoginLayoutComponent,
        children: [
          {
            path: "",
            redirectTo: "login",
            pathMatch: "full",
          },
          {
            path: "login",
            loadChildren:() => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
          }
        ]
      },
      {
        path: "",
        component: FullComponent,
        children: [
              {
                path: "",
                redirectTo: "/dashboard",
                pathMatch: "full",
                canActivate: [EnsureAuthenticated]
              },
              {
                path: "dashboard",
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
                canActivate: [EnsureAuthenticated]
              }
            ] 
      },
      {
        path: "home",
        component: FullComponent,
        loadChildren: () => import('./wibmo/wibmo.module').then(m => m.WibmoModule),
        canActivate: [EnsureAuthenticated]
      },
      
        path: "error",
        component: errorPageComponent,
      },
      {
        path: "**",
        component: NotFoundComponent,
      }
      
    ])
  ],
  //providers: [EnsureAuthenticated, LoginRedirect, Permissions, ParentPermissions],
  providers: [EnsureAuthenticated, LoginRedirect],
 exports: [RouterModule]
})
export class AppRoutingModule { }
