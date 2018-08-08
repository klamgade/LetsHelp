import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { User } from '../../interface/interface.interface';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersCollection: AngularFirestoreCollection<User>;  
  users: any;

  constructor(private afs: AngularFirestore, private _router: Router) { 
    
  }

  ngOnInit() {
    debugger;
    this.usersCollection = this.afs.collection('users');    
    this.users = this.usersCollection.valueChanges();
    console.log("this.users", this.users);
  }

  add(){
    debugger;
    this._router.navigate(['add']);
  } 

}
