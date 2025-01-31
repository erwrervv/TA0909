import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './component/homepage/homepage.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { Practice1Component } from './practice1/practice1.component';
import { ShareInputComponent } from './share-input/share-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { Practice2Component } from './practice2/practice2.component';
import { ArticleContentPipe } from './article-content.pipe';
import { SignupComponent } from './signup/signup.component';
import { Practice3Component } from './practice3/practice3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { TreeSelectModule } from 'primeng/treeselect';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ArticleoverviewComponent } from './component/articleoverview/articleoverview.component';
import { HomeComponent } from './component/home/home.component';
import { DataService } from './data.service';
import { CommentListComponent } from './component/comment-list/comment-list.component';
@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    LoginComponent,
    ArticleComponent,
    Practice1Component,
    ShareInputComponent,
    Practice2Component,
    ArticleContentPipe,
    SignupComponent,
    Practice3Component,
    ArticleoverviewComponent,
    HomeComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    EditorModule,
    DropdownModule,
    TabViewModule,
    RadioButtonModule,
  ],
  providers: [UserService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
