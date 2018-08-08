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

  constructor(fb: FormBuilder, private _router: Router, private _route: ActivatedRoute,
    private afs: AngularFirestore) {
    this.form = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  submit() {
    debugger;
    this.afs.collection('users').add({
      name: this.user.name,
      email: this.user.email
    });
  }
}
