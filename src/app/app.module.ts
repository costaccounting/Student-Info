import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewCoursesDetailComponent } from './view-courses-detail/view-courses-detail.component';
import { GetProfileService } from './get-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    ViewCoursesComponent,
    ViewCoursesDetailComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [GetProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
