import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginPageComponent {
  
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, public apiService: ApiService, public toastr: ToastrService, public router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.apiService.login(loginData).subscribe(
        (response: any) => {
          console.log(response, "error" in response)
          if ("error" in response){
            this.toastr.error(response.error);
            return; 
          }
          else{
            this.toastr.success('Login Successfull');
            this.router.navigateByUrl('/')
          localStorage.setItem("token",response.token)
          }
          

        },
        (error: any) => {
          console.error('Login failed', error);
          this.toastr.error('Something went wrong');
        }
      );
    }
  }
}
