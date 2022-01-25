import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styles: [
  ]
})
export class CreateProjectComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateProjectComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private projectService: ProjectsService,
  ) { }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  onNoClick(): void {
    this.dialogRef.close({ message: "closed" });
  }

  buildForm() {
    return this.formBuilder.group({
      accountName: new FormControl("fwsalabs", Validators.required),
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
    const repoObj = Object.assign(value, { createdBy })

    this.projectService.createProjectRequest(repoObj)
      .subscribe((res: any) => {
        console.log(res);
        this.dialogRef.close({ message: "success" })
      })

  }
}
