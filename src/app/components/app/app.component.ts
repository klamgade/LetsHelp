import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsSubmit } from '../../../service/forms-submit.service';
import { $ } from 'protractor';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  UserForm: FormGroup;
  UserImageFile: File;
  rating = 0; 
  @ViewChild('UserImage') User_Image;

  constructor(private fb: FormBuilder, private formService: FormsSubmit){
    this.UserForm = fb.group({
      'Email': ['', Validators.required],
      'Password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'UserImage': ['', Validators.required]
    });
  }



  OnSubmit(value){
    debugger;
    console.log(value);
    const Image = this.User_Image.nativeElement;
    if(Image.files && Image.files[0]){
      this.UserImageFile = Image.files[0];
    }
    const ImageFile: File = this.UserImageFile;
    const formData: FormData = new FormData();
    formData.append('Email', value.Email);
    formData.append('Password', value.Password);
    formData.append('UserImage', ImageFile, ImageFile.name);

    this.formService.submitData(formData).subscribe(
      data => {
        debugger;
        console.log("data", data);
      }
    )
  }

  onFileChange(event){
    debugger;
    console.log("value",event);
    event.target.value = "";
    //$('#image').Text(event.target.value.replace(/C:\\fakepath\\/i, ''));
  }
  
}
