import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // students: any[] = [];
  // constructor(
  //   private registerService: RegisterService,
  //   private toaster: ToastrService
  // ) {}
  // ngOnInit(): void {
  //   this.getStudents();
  // }

  // registerForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   userName: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4),
  //   ]),
  //   confirmPass: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4),
  //   ]),
  // });

  // get getEmail() {
  //   return this.registerForm.controls['email'];
  // }
  // get getUser() {
  //   return this.registerForm.controls['userName'];
  // }
  // get getPassword() {
  //   return this.registerForm.controls['password'];
  // }
  // get getConfirm() {
  //   return this.registerForm.controls['confirmPass'];
  // }

  // getStudents() {
  //   this.registerService.getAllUsers('students').subscribe((response: any) => {
  //     this.students = response;
  //   });
  // }

  // Send(e: any) {
  //   const user = {
  //     email: this.registerForm.value.email,
  //     userName: this.registerForm.value.userName,
  //     password: this.registerForm.value.password,
  //   };
  //   let index = this.students.findIndex(
  //     (item) => item.email == this.registerForm.value.email
  //   );
  //   if (index !== -1) {
  //     alert('Email is Already Used');
  //   } else {
  //     this.registerService.addUser(user).subscribe((respone) => {
  //       alert('Email Has Added');
  //       this.registerForm.reset();
  //     });
  //   }
  // }

  ///////////////////////////////////////////////////////
  students: any[] = [];
  constructor(
    private registerService: RegisterService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getUser();
  }
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  getUser() {
    this.registerService.getAllUsers('student').subscribe((response: any) => {
      this.students = response;
    });
  }

  onSubmit(event: any) {
    let user = {
      email: this.registerForm.value.email,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
    };

    let index = this.students.findIndex(
      (item) => item.email == this.registerForm.value.email
    );
    if (index !== -1) {
      this.toaster.error('Email is Already Exist');
      this.router.navigate(['/Login']);
    } else {
      this.registerService.addUser(user).subscribe((Response) => {});
      this.registerForm.reset();
      this.toaster.success('Email has Added');
      this.router.navigate(['/login']);
    }
  }

  get getUsername() {
    return this.registerForm.controls['username'];
  }
  get getEmail() {
    return this.registerForm.controls['email'];
  }
  get getPassword() {
    return this.registerForm.controls['password'];
  }
  get getConfirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
}
