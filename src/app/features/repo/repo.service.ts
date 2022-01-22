import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class RepoService {

  private url: string = environment.api_url + "repos";

  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  private get getAccessToken() {
    return this.commonService.getLs("accessToken")
  }

  getRepos() {

    return this.http.get(this.url);
  }

  createRepo(data: { name: string, private: boolean, auto_init: boolean }) {
    return this.http.post(this.url, data);
  }


}
