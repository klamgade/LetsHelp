import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { User } from '../../interface/interface.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersCollection: AngularFirestoreCollection<User>;  
  users: any;

  constructor(private afs: AngularFirestore) { 
    
  }

  ngOnInit() {
    debugger;
    this.usersCollection = this.afs.collection('users');    
    this.users = this.usersCollection.valueChanges();
    console.log("this.users", this.users);
  }

}
