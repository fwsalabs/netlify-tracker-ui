import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class SitesService {

  private url: string = environment.api_url + 'sites/';

  constructor(
    private http: HttpClient
  ) { }

  getSites() {
    return this.http.get(this.url);
  }

  createSite(data: { name: string, repo: { provider: string, repo: string, branch?: string, private?: boolean } }) {
    return this.http.post(this.url, data);
  }


}
