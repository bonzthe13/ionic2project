import { Component } from '@angular/core';
import { AlertController, NavController,ToastController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  username: string;
  password: string;
  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserData,public toast:ToastController) {

  }
  ngAfterViewInit() {
    this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  // changeUsername() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Change Username',
  //     buttons: [
  //       'Cancel'
  //     ]
  //   });
  //   alert.addInput({
  //     name: 'username',
  //     value: this.username,
  //     placeholder: 'username'
  //   });
  //   alert.addButton({
  //     text: 'Ok',
  //     handler: (data: any) => {
  //      let cemail=data.replace(/^\s+|\s+$/g, '');
  //       if (cemail.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
  //         this.userData.setUsername(data.username);
  //         this.getUsername();
  //       }else{
  //         this.bonz_toastme("Not valid email...",3000)
  //       }
  //     }
  //   });
  //   alert.present();
  // }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  // changePassword() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Change Password',
  //     buttons: [
  //       'Cancel'
  //     ]
  //   });
  //   alert.addInput({
  //     name: 'password',
  //     value: this.password,
  //     placeholder: 'password'
  //   });
  //   alert.addButton({
  //     text: 'Ok',
  //     handler: (data: any) => {
  //       let cpass = data.replace(/^\s+|\s+$/g, '');
  //       if(cpass.length>3) {
  //         this.userData.setPassword(data.password);
  //         this.getPassword();
  //       }else{
  //         this.bonz_toastme("Password should be minimum of 4 characters...",3000);
  //       }
  //     }
  //     });
  //     console.log('Clicked to change password');
  //   alert.present();
  // }

  getPassword() {
    this.userData.getPassword().then((password) => {
      this.password = password;
    });
  }

  logout() {
    this.userData.logout();
    //this.nav.setRoot('LoginPage');
    //this.nav.push('app.template');
    this.bonz_toastme('Goodbye!!!.',3000);
    this.nav.push('LoginPage');
  }

  support() {
    this.nav.push('SupportPage');
  }

  bonz_toastme(msg:any,ndur:any){
    this.toast.create({
      message:msg,
      duration: ndur
    }).present();
  }
}
