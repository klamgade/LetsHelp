import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { HeroParentComponent } from 'src/app/components/hero-parent/hero-parent.component';
import { TestComponent } from 'src/app/components/test/test.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HeroChildComponent } from 'src/app/share/components/hero-child/hero-child.component';
import { HeroGrandParentComponent } from 'src/app/components/hero-grand-parent/hero-grand-parent.component';
import { FormsSubmit } from '../service/forms-submit.service';
import { HttpModule } from '@angular/http';
import { RatingComponent } from './share/components/rating/rating.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomValidatorsComponent } from './components/custom-validators/custom-validators.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FileUploadComponent } from 'src/app/components/file-upload/file-upload.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { GithubComponent } from 'src/app/components/github/github.component';
import { routing } from 'src/app/app.routing';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { GitHubUserComponent } from 'src/app/components/git-hub-user/git-hub-user.component';
import { AuthGuard } from '../service/auth-guard.service';
import { LoginService } from '../service/login.service';
import { PreventUnsavedChangesGuard } from '../service/prevent-unsaved-changes-guard.service';



const appRoutes: Routes = [
  { path: 'heroParent', component: HeroParentComponent },
  { path:  'app-file-upload', component: FileUploadComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeroChildComponent,
    HeroParentComponent,
    HeroGrandParentComponent,
    FileUploadComponent,
    RatingComponent,
    ProductComponent,
    ProductsComponent,
    CustomValidatorsComponent,
    NotFoundComponent,
    GithubComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    GitHubUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    routing
  ],
  providers: [FormsSubmit, AuthGuard, LoginService, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
