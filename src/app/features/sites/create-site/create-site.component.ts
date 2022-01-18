import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SitesService } from '../sites.service';

@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styles: [
  ]
})
export class CreateSiteComponent implements OnInit {

  siteForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sitesService: SitesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.siteForm = this.buildForm();
  }


  private buildForm() {
    return this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      repo: new FormControl(null, Validators.required)
    })
  }


  formSubmit() {
    const { valid, value } = this.siteForm;
    if (!valid) {
      return alert("Invalid Form Input");
    }

    const data = {
      name: value.name,
      repo: {
        provider: "github",
        repo: value.repo,
        branch: "main",
      }
    }

    this.sitesService.createSite(data)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/sites");
      })

  }

}
