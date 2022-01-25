import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'mep-admin-layout',
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent implements OnInit {

  srcWidth!: number;

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.themeService.srcWidth.subscribe(res => this.srcWidth = res);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    const height = window.innerHeight;
    this.themeService.updateSrcHeight(height);
    const width = window.innerWidth;
    this.themeService.updateSrcWidth(width);
  }


}
