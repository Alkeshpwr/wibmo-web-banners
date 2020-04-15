import { Directive, ElementRef, Input, OnInit, Renderer } from "@angular/core";
import { LocalStorageService } from '../service/localstorage.service';
import { UserResp } from '../models/loginmodels/userResp.pojo';

@Directive({
  selector: "[maskdob]"
})
export class MaskDobDirective implements OnInit {
  @Input("maskdob") permission: string;
  userResp:UserResp;
  constructor(
    private _el: ElementRef, 
    private renderer: Renderer,
    private localStorage: LocalStorageService,
  ) {}
  ngOnInit() {
    this.userResp =  this.localStorage.getUserData();
    if(this.userResp.reportPermissions.map(function(e) { return e.report.reportName; }).indexOf(this.permission) === -1) {
      this.renderer.setElementStyle(
        this._el.nativeElement,
        "filter",
        "blur(3px)"
      );
      this.renderer.setElementStyle(
        this._el.nativeElement,
        "-webkit-filter",
        "blur(3px)"
      );
    }
  }
}
