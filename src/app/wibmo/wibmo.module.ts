import { CommonModule } from "@angular/common";
import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { WibmoComponent } from "./wibmo.component";
import { WibmoRoutes } from "./wibmo.routing";
import { MatCardModule} from '@angular/material/card';
import { SharedModule } from '../share.module';
import{ MaterialModule } from '../angular-material';
import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [ CommonModule,
     RouterModule.forChild(WibmoRoutes),
      MatCardModule,
      MaterialModule,
      SharedModule,
  
    ],
  declarations: [WibmoComponent , HomeComponent ],
  exports: [RouterModule],
  bootstrap: [WibmoComponent],
  
})
export class WibmoModule {}
