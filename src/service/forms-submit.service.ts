import { Injectable } from "@angular/core";
import {Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable()
export class FormsSubmit {

    constructor(private http: Http){

    }

    submitData(formGroup){
        debugger;
        const URL = '';
        const Res = this.http.post(URL, formGroup).pipe(map((response : any) => response.json()));
        console.log("response", Res);
        return Res;
    }
}
