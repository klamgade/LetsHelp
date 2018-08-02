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
  searchControl = new FormControl();

  constructor(private fb: FormBuilder, private formService: FormsSubmit, private _gitHubService: Github) {
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
}
