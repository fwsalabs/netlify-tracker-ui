import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Injectable()
export class RepoService {

  private url: string = 'https://api.github.com/';
  private orgUrl: string = this.url + 'orgs/Devops-Testing-YOLO/repos';
  private userUrl: string = this.url + 'users/fwsalabs/repos'

  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  private get getAccessToken() {
    return this.commonService.getLs("accessToken")
  }

  getRepos() {
    return this.http.get(this.userUrl, {
      headers: {
        "Authorization": "Bearer " + this.getAccessToken
      }
    });
  }

}
