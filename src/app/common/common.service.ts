import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private secureLs: SecureLS;

  constructor() {
    this.secureLs = new SecureLS({ encodingType: 'aes', encryptionSecret: 'hastaLaVistaBaby' });
  }

  getLs(key: string) {
    return this.secureLs.get(key);
  }

  setLs(key: string, value: string) {
    this.secureLs.set(key, value);
  }

}
