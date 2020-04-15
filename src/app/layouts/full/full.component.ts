import { Component, OnInit ,OnDestroy,ChangeDetectorRef} from '@angular/core';
import { Router ,ActivatedRoute,ActivationEnd	} from '@angular/router';
//import { MediaMatcher } from '@angular/cdk/layout';
import { InitService } from '../../service/init.service';
import { LocalStorageService } from '../../service/localstorage.service';

@Component({
    selector: 'full-layout',
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit ,OnDestroy{
    mobileQuery: MediaQueryList;
    userdetails:any = [];
    color = 'default';
    showSettings = false;
    showMinisidebar = false; 
    showDarktheme = false;
    opened: boolean = true;
    showWibmoMenu = false;
    hideSideMenu:boolean
    step :any= 1;
    private _mobileQueryListener: () => void;
    constructor(
        public router: Router,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 768px)');
        if(this.mobileQuery.matches)
        this.opened = false;
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
     }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
      }
}
