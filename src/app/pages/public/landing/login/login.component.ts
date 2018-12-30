import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;

  constructor(private authService: AuthService) {}

  public onSignInGoogle(form: NgForm): Promise<void> {
    this.loading = true;
    return this.authService.signInWithGoogle();
  }

  public onSignInTwitter(form: NgForm): Promise<void> {
    this.loading = true;
    return this.authService.signInWithTwitter();
  }

  public onSignInFacebook(form: NgForm): Promise<void> {
    this.loading = true;
    return this.authService.signInWithFacebook();
  }

  public onSignInGithub(form: NgForm): Promise<void> {
    this.loading = true;
    return this.authService.signInWithGithub();
  }

  public onSignin(form: NgForm): Promise<void> {
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    return this.authService.signinUser(email, password);
  }

  public onSigninAnonymous(form: NgForm): Promise<void> {
    this.loading = true;
    return this.authService.signInAnonymous();
  }


  ngOnInit() {
  }

}
