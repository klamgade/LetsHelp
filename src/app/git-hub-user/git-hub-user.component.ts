import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-git-hub-user',
  templateUrl: './git-hub-user.component.html',
  styleUrls: ['./git-hub-user.component.css']
})
export class GitHubUserComponent implements OnInit {

  login;
  score;
  subscription;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    debugger;
    this.subscription = this._route.params.subscribe(params => {
      this.login = params["login"];
      this.score = params["score"];
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
}

}
