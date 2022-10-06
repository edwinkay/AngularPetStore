import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderComponent } from './components/slider/slider.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VerificarComponent } from './components/verificar/verificar.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoginDesignComponent } from './shared/login-design/login-design.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    NavbarComponent,
    NotFoundComponent,
    SliderComponent,
    RegistrarComponent,
    VerificarComponent,
    RecuperarComponent,
    SpinnerComponent,
    LoginDesignComponent,
    RegisterComponent,
    RecoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
