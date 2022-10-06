import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss']
})
export class RecuperarComponent implements OnInit {

  recuperarUsuario:FormGroup
  loading: boolean=false


  constructor(private fb:FormBuilder, private afAuth:AngularFireAuth, private toastr: ToastrService, private router:Router)
  {
    this.recuperarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  recuperar(){
    const email = this.recuperarUsuario.value.email

    this.loading = true
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/login'])
      this.toastr.info('Revisa tu correo para restablecer tu contraseña', 'Peticion Aceptada');

    }).catch((error) => {
      // console.log(error)
    this.loading =false
    this.firebaseError(error.code)
    })
  }
  firebaseError(code: string){

       switch (code) {
        //login
         case 'auth/user-not-found':
             this.toastr.error('Este correo no es valido', 'Error')
           break;
         case 'auth/missing-email':
             this.toastr.error('Inserta un correo', 'Error')
           break;


        default: 'error desconocido'
          break;
       }
   }
}
