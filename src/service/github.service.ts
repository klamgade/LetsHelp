import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '../../node_modules/@angular/core';
import { GitHubUser } from 'src/app/interface/interface.interface';

@Injectable()
export class Github {
    constructor(private _http: HttpClient) {
    }

    getGitHubData(_searchTerm): Observable<GitHubUser> {
        return this._http.get<GitHubUser>("https://api.github.com/search/users?q=" + _searchTerm);
    }
}


