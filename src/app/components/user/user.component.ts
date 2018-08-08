import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../../interface/interface.interface';
import { Router } from '../../../../node_modules/@angular/router';
import { map } from '../../../../node_modules/rxjs/operators';

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
    this.usersCollection = this.afs.collection('users');
    this.users = this.usersCollection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as User;
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );

  }

  add() {
    this._router.navigate(['add']);
  }

  onDelete(userId, name) {
    debugger;
    if (confirm("Are you sure you want to delete " + name + "?")) {
      this.afs.doc('users/' + userId).delete();
    }
  }

}
