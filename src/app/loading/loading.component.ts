import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  public showModal: boolean;

  constructor(private loading: LoadingService) { }

  ngOnInit() {
    this.loading.getModal().subscribe((isOpen) => {
      this.showModal = isOpen as boolean;
    });
  }

  closeModal() {
    this.loading.close();
  }

}
