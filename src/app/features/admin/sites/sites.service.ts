import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private base_url = environment.db_api_url
  private secureLs: any;

  constructor(
    private http: HttpClient
  ) {
    this.secureLs = new SecureLS({ encodingType: 'aes', encryptionSecret: 'hastaLaVistaBaby' });
  }

  getLs(key: string) {
    return this.secureLs.get(key);
  }

  setLs(key: string, value: string) {
    this.secureLs.set(key, value);
  }

  getAllSites() {
    const url = this.base_url + "netlify";
    return this.http.get(url);
  }


}
