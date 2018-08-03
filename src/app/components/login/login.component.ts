import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../service/login.service';
import { AuthGuard } from '../../../service/auth-guard.service';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [LoginService, AuthGuard]
})
export class LoginComponent {

    userForm: FormGroup;

    constructor(fb: FormBuilder, private _loginService: LoginService, private _router: Router) {
        debugger;
        this.userForm = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.compose([Validators.required])],
            userImage: ['']
        })
    }

    onSubmit() {
        debugger;
        var result = this._loginService.login(this.userForm.controls['username'].value, this.userForm.controls['password'].value);

        if (!result) {
            this.userForm.controls['password'].setErrors({
                invalidLogin: true
            });
        } else {
            // imperative navigation
            this._router.navigate(['github']);
        }
    }
}