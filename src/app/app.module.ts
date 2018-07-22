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
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsSubmit } from '../service/forms-submit.service';
import { HttpModule } from '@angular/http';
import { RatingComponent } from './share/components/rating/rating.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';


const appRoutes: Routes = [
  { path: 'heroParent', component: HeroParentComponent },
  { path:  'app-file-upload', component: FileUploadComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    HeroChildComponent,
    HeroParentComponent,
    HeroGrandParentComponent,
    FileUploadComponent,
    RatingComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
 
  ],
  providers: [FormsSubmit],
  bootstrap: [AppComponent]
})
export class AppModule { }
