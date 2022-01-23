import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
  
  <router-outlet></router-outlet>

  `,
  styles: []
})
export class AppComponent implements OnInit {

  isAuthenticated!: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated
  }


}
