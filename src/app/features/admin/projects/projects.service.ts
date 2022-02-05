import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { GLOBAL_CONSTANT } from 'src/app/core/constant/global.constant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

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
    const url = this.base_url + "repos";
    return this.http.get(url);
  }

  createProjectRequest(data: { accountName: string, repoName: string, createdBy: string }) {
    const url = this.base_url + "repos";
    return this.http.post(url, data);
  }

  getProject(id: number) {
    const url = this.base_url + "repos/" + id;
    return this.http.get(url);
  }

  getGithubRepoDetail() {
    const url = this.base_url + "github";
    return this.http.get(url);
  }

}
