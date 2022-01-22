import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

}
