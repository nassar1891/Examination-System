import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: any[] = [];
  // type: string = 'students';
  rule: any = 'students';
  constructor(
    private registerService: RegisterService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  getrule(event: any) {
    let inputVal = event.target.value;
    console.log(inputVal);
    this.rule = inputVal;
    this.getUser();
  }

  getUser() {
    this.registerService.getAllUsers(this.rule).subscribe((response: any) => {
      this.users = response;
    });
  }
  submit() {
    let index = this.users.findIndex(
      (item) =>
        item.email == this.loginForm.value.email &&
        item.password == this.loginForm.value.password
    );
    if (index == -1) {
      this.toaster.error('Check Email and Password');
    } else {
      let model = {
        username: this.users[index].username,
        role: this.rule,
      };
      this.registerService.login(model).subscribe((response) => {
        this.registerService.user.next(response);
        this.toaster.success('Succeed');
        this.loginForm.reset();
        this.router.navigate(['/']);
      });
    }
  }
}
