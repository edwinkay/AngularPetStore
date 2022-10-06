import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

// type LoginFormData = {
//   email: string,
//   password: string
// }

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginUsuario:FormGroup
  loading: boolean=false

  constructor(private firebaseError:FirebaseErrorService, private fb:FormBuilder, private afAuth:AngularFireAuth, private toastr: ToastrService, private router:Router) {this.loginUsuario =this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',Validators.required],
  }) }

  ngOnInit(): void {
  }

  login(){
    const email = this.loginUsuario.value.email
    const password = this.loginUsuario.value.password

    this.loading=true
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      this.router.navigate(['/home'])
      console.log(user)
    }).catch((error)=>{
      this.firebaseError.errorFirebase(error.code)
      this.loading=false
      // console.log(error)
    })
  }


}
