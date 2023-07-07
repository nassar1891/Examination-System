import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './Components/login/login.component';
import { NewExamComponent } from './Components/new-exam/new-exam.component';
import { HomeComponent } from './Components/home/home.component';
import { ResultComponent } from './Components/result/result.component';
import { AboutDetailsComponent } from './Components/about-details/about-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CourseItemComponent } from './Components/course-item/course-item.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InfoComponent } from './Components/info/info.component';
import { InfoExComponent } from './Components/info-ex/info-ex.component';
import { LoginSectionComponent } from './Components/login-section/login-section.component';
import { MainTitleComponent } from './Components/main-title/main-title.component';
import { RegisterSectionComponent } from './Components/register-section/register-section.component';
import { StartComponent } from './Components/start/start.component';
import { TechComponent } from './Components/tech/tech.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ContactSectionComponent } from './Components/contact-section/contact-section.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, RegisterComponent, LoginComponent, NewExamComponent, HomeComponent, ResultComponent, AboutDetailsComponent, AboutUsComponent, CourseItemComponent, CoursesComponent, FooterComponent, InfoComponent, InfoExComponent, LoginSectionComponent, MainTitleComponent, RegisterSectionComponent, StartComponent, TechComponent, ContactComponent, ContactSectionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
