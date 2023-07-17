import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { SwtAuthService } from 'src/app/services/swt-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;


  constructor(
    private fb: FormBuilder, 
    private _snackBar: MatSnackBar, 
    private router: Router,
    private _swtAuthService: SwtAuthService
    ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  
  ingresar(){

    const user: User = {
      username: this.form.value.username,
      password: this.form.value.password
    }

    this.loading = true;

    this._swtAuthService.login(user).subscribe({
    next: (data:any) => {
      this.loading = false;
      console.log(data);
      this.router.navigate(['dashboard/datos_maestros']);
      localStorage.setItem('token',data.token)   
    },
    error: (e) => {
      this.loading = false;
      this.error();
    },
    complete: () => console.info('complete') 
    })    
  }

  error(){

    this._snackBar.open('Usuario o Contraseña ingresado son Invalidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

}
