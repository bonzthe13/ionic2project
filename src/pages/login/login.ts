import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import {NavController, ToastController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  login: { username?: string, password?: string } = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData,public toast:ToastController) {}

  onLogin(form: NgForm) {
    console.log(form.value);

    var cpass: string = this.login.password.trim();
    var cemail: string = this.login.username.trim();
    // alert(cemail);
      if (cpass.length > 3) {
        if (cemail.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
          let valid = form.valid;
          if (valid) {
            this.submitted = true;
            this.userData.login(this.login.username, this.login.password);
            this.bonz_toastme('Welcome!!!',3000);
            this.navCtrl.push(TabsPage);
          } else {
            //alert("Invalid username and password...");
            this.bonz_toastme('Invalid username and password...',3000);
          }
        } else {
          //alert("Not valid email...");
          this.bonz_toastme('Not valid email...',3000);
        }
      } else {
        //alert("Password must be minimum of 4 characters.");
        this.bonz_toastme('Password must be minimum of 4 characters.',3000);
      }
  }

  bonz_toastme(msg:any,ndur:any){
    this.toast.create({
      message:msg,
      duration: ndur
    }).present();
  }

}

