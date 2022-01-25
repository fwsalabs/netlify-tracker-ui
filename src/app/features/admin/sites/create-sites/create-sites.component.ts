import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SitesService } from '../sites.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-sites',
  templateUrl: './create-sites.component.html',
  styles: [
  ]
})
export class CreateSitesComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateSitesComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private sitesService: SitesService,
  ) { }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  onNoClick(): void {
    this.dialogRef.close({ message: "closed" });
  }

  buildForm() {
    return this.formBuilder.group({
      siteName: new FormControl("", Validators.required),
      repoName: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z -]+$')])
    })
  }

  submitForm() {
    const { invalid, value } = this.form;
    console.log(value);

    if (invalid) {
      this.toastr.error("Invalid Form Input");
      return;
    }

    const createdBy = this.authService.loggedInUser;
    const repoObj = {
      name: value.siteName,
      repo: {
        provider: "github",
        repo: "fwsalabs/" + value.repoName,
        private: false,
        branch: "main"
      }
    }

    console.log(repoObj);

    // this.projectService.createProjectRequest(repoObj)
    //   .subscribe((res: any) => {
    //     console.log(res);
    //     this.dialogRef.close({ message: "success" })
    //   })

  }


}
