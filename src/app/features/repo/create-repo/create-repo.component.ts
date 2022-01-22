import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styles: []
})
export class CreateRepoComponent implements OnInit {

  repoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private repoService: RepoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.repoForm = this.buildForm();
  }


  private buildForm() {
    return this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      // projectType: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      private: new FormControl(false),
      auto_init: new FormControl(true),
      // host: new FormControl(false),
      // provider: new FormControl(null, Validators.required)
    })
  }


  submitForm() {

    const { value, invalid } = this.repoForm;
    console.log(value);

    if (invalid) {
      this.toastr.error("Invalid Form Input")
      return;
    }

    this.repoService.createRepo(value)
      .subscribe(res => {
        this.toastr.success("Repository Created Successfully");
        this.router.navigateByUrl("/repos")
      }, err => {
        this.toastr.error("Failed to Create Repository")
      })

  }


}
