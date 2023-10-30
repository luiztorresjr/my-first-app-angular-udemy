import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  })
export class LoginComponent {
  username = '';
  allowButton = false;

  onAbleButton(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username.length > 0 ){
      this.allowButton = true;
    }else{
      this.allowButton = false;
    }
  }

  onLoginUser(){
    this.username = '';
    this.allowButton = false;
  }
}
