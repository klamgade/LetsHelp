
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { GithubComponent } from 'src/app/components/github/github.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { GitHubUserComponent } from 'src/app/components/git-hub-user/git-hub-user.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { AuthGuard } from '../service/auth-guard.service';
import { ProductsComponent } from './components/products/products.component';
import { PreventUnsavedChangesGuard } from 'src/service/prevent-unsaved-changes-guard.service';
import { UserComponent } from './components/user/user.component';


export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'github', component: GithubComponent},
  {path: 'github/user/:login/:score', component: GitHubUserComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard]},
  {path: 'products', component: ProductsComponent},
  {path: 'contact', component: ContactComponent,canActivate:[AuthGuard]},
  {path: 'user', component: UserComponent},
  {path: '**', component:NotFoundComponent}
]);