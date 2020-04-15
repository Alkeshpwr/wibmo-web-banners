
import {filter} from 'rxjs/operators';
import { Component, OnInit, Inject ,ViewChild,Output,EventEmitter} from '@angular/core';
import { LocalStorageService } from '../../service/localstorage.service';
import { RequestService } from '../../service/request.service';
import { Router ,ActivatedRoute,ActivationEnd	} from '@angular/router';
import { 
  PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { globalData } from '../global.model';
import { WibmoRoutes } from '../../wibmo/wibmo.routing';
import { subLinks } from './sidemenu.model';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  
  userdetails:any = [];
  opts = globalData.scrollConfig;
  step :any= 1;
  showSideMenu:boolean = false;
  wibmoLinks:any = [];
  subMenuLinks = subLinks;
  hideSideMenu = false;
  @Output() toggleMenu = new EventEmitter<any>();
  @ViewChild(PerfectScrollbarComponent, { static: true }) componentRef?: PerfectScrollbarComponent;
  constructor(@Inject(RequestService) private services : RequestService, 
   private LocalStorageService: LocalStorageService, private router: Router,private activatedRoute: ActivatedRoute) { 

    this.router.events.pipe(filter(e => e instanceof ActivationEnd	
    )).subscribe((route)=> {
    
      if(route['snapshot']._lastPathIndex == 1)
        this.step = route['snapshot'].data.roles;
        if(route['snapshot'].data.roles== "ACCOUNT_HOLDER"){
          this.showSideMenu = true;
          this.tooglesideMenu();
        }
    });
   this.wibmoLinks= WibmoRoutes[0].children ;
  }

  ngOnInit() {
    this.userdetails = this.LocalStorageService.getUserData();
    let that = this; 
    window.addEventListener('load',()=>{
      var el = document.querySelector('mat-expansion-panel-header.mat-expanded span') as HTMLHRElement;
      if(el)
      this.componentRef.directiveRef.scrollTo(1,el.offsetTop-10, 500);
      
    });
  }
  tooglesideMenu(){
    this.toggleMenu.emit({status:1});
  }
  
}
