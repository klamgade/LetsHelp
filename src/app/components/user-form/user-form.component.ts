import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from '../../../../node_modules/rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  id;
  form: FormGroup;
  title: string;
  user = new User();

  userDoc: AngularFirestoreDocument<User>;
  singleUser: Observable<User>;

  constructor(fb: FormBuilder, private _router: Router, private _route: ActivatedRoute, private afs: AngularFirestore) {
    this.form = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit() {
    debugger;
    this._route.params.subscribe(params => {
      this.id = params["id"];
    });

    if (!this.id) {
      this.title = "New User";
    }
    else {
      this.title = "Edit User";
      this.userDoc = this.afs.doc('users/' + this.id);
      this.singleUser = this.userDoc.valueChanges();
      this.singleUser.subscribe((user) => {
        this.form.get('username').setValue(user.name);
        this.form.get('email').setValue(user.email);
      });
    }
  }

  submit() {
    debugger;
    if (this.id) {
      this.afs.doc('users/' + this.id).update({
        name: this.user.name,
        email: this.user.email
      });;
    }
    else {
      this.afs.collection('users').add({
        name: this.user.name,
        email: this.user.email
      });
    }

    this._router.navigate(['']);
  }
}
