
import { AppErrorHandler } from './common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , ReactiveFormsModule }   from '@angular/forms';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TestingComponent } from './components/testing/testing.component'
import { CustomPipe } from './custom.pipe';
import { IsemptyPipe } from './isempty.pipe';
import { CourseComponent } from './components/course/course.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { PostComponent } from './components/post/post.component';
import { ErrorHandler } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    CustomPipe,
    CourseComponent,
    FavouriteComponent,
    PostComponent,
    IsemptyPipe,
    NotfoundComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    { path:'',component :PostComponent},
    { path:'post',component:PostComponent},
    { path:'**',component:NotfoundComponent}
    ])
      
  ],
  providers: [PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
