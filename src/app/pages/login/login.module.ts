import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '@shared';
import { LoginRouting } from './login.routing';
import { AuthService } from '@features/auth';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRouting
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
