import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-list-repo',
  templateUrl: './list-repo.component.html',
  styles: [
  ]
})
export class ListRepoComponent implements OnInit {

  repoList: any;

  constructor(
    private authService: AuthService,
    private repoService: RepoService
  ) { }

  ngOnInit(): void {
    this.repoList = this.repoService.getRepos();
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }


}
