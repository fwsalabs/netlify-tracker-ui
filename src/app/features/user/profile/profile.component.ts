import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountComponent } from './account/account.component';
import { IntegrationComponent } from './integration/integration.component';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  profile!: Observable<any>
  selectedPortal!: Portal<any>;
  accountPortal!: ComponentPortal<AccountComponent>;
  integrationPortal!: ComponentPortal<IntegrationComponent>;

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.generateComponentPortal();
    this.selectedPortal = this.accountPortal;
    // this.profile = this.profileService.userDetails;
  }


  generateComponentPortal() {
    this.accountPortal = new ComponentPortal(AccountComponent);
    this.integrationPortal = new ComponentPortal(IntegrationComponent);
  }


}
