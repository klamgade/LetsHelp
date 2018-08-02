import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsSubmit } from '../../../service/forms-submit.service';
import { CustomValidatorsComponent } from '../custom-validators/custom-validators.component';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Github } from 'src/service/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  title = 'app';
  isLoading: boolean = false;
  users: any = [];
  UserForm: FormGroup;
  searchControl = new FormControl();
  UserImageFile: File;
  rating = 0;
  @ViewChild('UserImage') User_Image;
  password() {
    this.UserForm.get('password');
  }

  constructor(private fb: FormBuilder, private formService: FormsSubmit, private _gitHubService: Github) {
    this.UserForm = fb.group({
      'Email': ['', Validators.required],
      'password': ['', Validators.compose([CustomValidatorsComponent.cannotContainDollarSign])],
      'UserImage': ['', Validators.required]
    });
    console.log("password validation", );
  }

  ngOnInit() {
    debugger;
    this.searchControl.valueChanges .filter(text => text.length >= 3)  
     .debounceTime(400) 
      .distinctUntilChanged()  
      .subscribe(value => { ​
        this.isLoading = true;
        this._gitHubService.getGitHubData(value)
        .subscribe(data =>{
          this.users = data.items;
          this.isLoading = false;
          console.log("data received:", data);
        });
      });           
  }

  OnSubmit(value) {
    console.log("user form values: ", this.UserForm.value);
    const Image = this.User_Image.nativeElement;
    if (Image.files && Image.files[0]) {
      this.UserImageFile = Image.files[0];
    }
    const ImageFile: File = this.UserImageFile;
    const formData: FormData = new FormData();
    formData.append('Email', value.Email);
    formData.append('Password', value.Password);
    formData.append('UserImage', ImageFile, ImageFile.name);

    this.formService.submitData(formData).subscribe(
      data => {
        console.log("data", data);
      });
  }

  onFileChange(event) {
    event.target.value = "";
  }
}
