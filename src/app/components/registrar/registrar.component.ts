import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  registrarUsuario:FormGroup
  loading:boolean = false

  constructor(private firebaseError:FirebaseErrorService, private fb:FormBuilder, private afAuth:AngularFireAuth, private toastr: ToastrService, private router:Router)

  {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
   registrar(){
    const email = this.registrarUsuario.value.email
    const password = this.registrarUsuario.value.password
    const repetirPassword = this.registrarUsuario.value.repetirPassword

    if (password !== repetirPassword) {
        this.toastr.error('Las contraseñas no coinciden', 'Error')
        return
    }
    this.loading = true
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.toastr.success('El usuario fue registrado con exito!!', 'Usuario Registrado');
      this.router.navigate(['/login'])


    }).catch((error) => {
      console.log(error)
      this.firebaseError.errorFirebase(error.code)
      this.loading = false
    })
   }



}
