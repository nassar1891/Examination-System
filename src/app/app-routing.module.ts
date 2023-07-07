import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NewExamComponent } from './Components/new-exam/new-exam.component';
import { HomeComponent } from './Components/home/home.component';
import { ResultComponent } from './Components/result/result.component';
import { RegisterSectionComponent } from './Components/register-section/register-section.component';
import { InfoComponent } from './Components/info/info.component';
import { LoginSectionComponent } from './Components/login-section/login-section.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ContactSectionComponent } from './Components/contact-section/contact-section.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'login', component: LoginSectionComponent },
  { path: 'exam', component: NewExamComponent },
  { path: 'result', component: ResultComponent },
  { path: 'Regs', component: RegisterSectionComponent },
  { path: 'about', component: InfoComponent },
  { path: 'contact', component: ContactSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
