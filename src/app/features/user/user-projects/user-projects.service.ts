import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { GLOBAL_CONSTANT } from 'src/app/core/constant/global.constant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProjectsService {

  private base_url = environment.db_api_url
  private secureLs: any;

  constructor(
    private http: HttpClient
  ) {
    this.secureLs = new SecureLS({ encodingType: 'aes', encryptionSecret: GLOBAL_CONSTANT.APP_SECRET });
  }

  getLs(key: string) {
    return this.secureLs.get(key);
  }

  setLs(key: string, value: string) {
    this.secureLs.set(key, value);
  }

  getAllProjects() {
    const username = this.getLs("username");
    const url = this.base_url + "projects/user/" + username;
    return this.http.get(url);
  }

  createProjectRequest(data: { name: string, description: string }) {
    const username = this.getLs("username");
    const url = this.base_url + "projects/user/" + username;
    return this.http.post(url, data);
  }

  getProject(id: number) {
    const url = this.base_url + "projects/" + id;
    return this.http.get(url);
  }

  getGithubRepoDetail() {
    const url = this.base_url + "github";
    return this.http.get(url);
  }

}
