import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataService } from '../../providers/data-service';
import { UserData } from '../../providers/user-data';
import { AlertController, NavController,ToastController } from 'ionic-angular';

@Component({
  selector: 'page-bonzprj',
  templateUrl: 'bonzprj.html'
})

export class BonzprjPage {
  items: any;
  project: string;
  retval: boolean = false;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public storage: Storage, public dataservice: DataService, public userData: UserData,public toast:ToastController) {
     this.refresh();
  };

  ngOnInit(){
    this.refresh();
    //window.location.reload();
  }

  refresh(){
    this.storage.get('myStored').then((data) => {
      console.log("Current data : " + data);
      this.items = data;
      console.log(this.items + ' current data ' + data);
      //this.itemsd = data;
    });
  }

  addnew() {
    let alert = this.alertCtrl.create({
      title: 'Adding new Project',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'project',
      value: this.project,
      placeholder: 'Project name 50 characters only.'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        //this.userData.setUsername(data.project);
        console.log("new data(" + data.project + ")");
        if (data.project != null) {
          let cproject = data.project.replace(/^\s+|\s+$/g, '');
          if (cproject != '') {
            this.dataservice.do_check_data(data.project);
            console.log("For new record..." + data.project);
          // window.location.reload();
          }else{
            this.bonz_toastme("Please specify your project name...",3000);
          }
        }else{
          this.bonz_toastme("Please specify your project name...",3000);
        }
        //window.location.reload();
        //this.refresh();
      }
    });
    alert.present();
    //this.refresh();
  }

  // delEntry(mdata:any){
  //   let alert = this.alertCtrl.create({
  //     title: 'Delete this project?',
  //     buttons: [
  //       'No'
  //     ]
  //   });
  //   alert.addInput({
  //     name: 'projectdel',
  //     value: mdata,
  //     placeholder: ''
  //   });
  //   alert.addButton({
  //     text: 'Yes',
  //     handler: (data: any) => {
  //       //this.userData.setUsername(data.project);
  //       if (data.projectdel != null ) {
  //         //OnSetData(data.project);
  //         //this.dataservice.do_check_data(data.project.trim());
  //         this.dataservice.do_delete_entry(data.projectdel);
  //         //console.log("Record to delete..."+data.project);
  //       }
  //     }
  //   });
  //   alert.present();
  // }

  delAll() {
    let alert = this.alertCtrl.create({
      title: 'Delete all projects.',
      buttons: [
        'No'
      ]
    });
    alert.addInput({
      name: 'projectdel',
      value: 'Are you sure?',
      placeholder: ''
    });
    alert.addButton({
      text: 'Yes',
      handler: (data: any) => {
        //this.userData.setUsername(data.project);
        this.dataservice.do_delete_all();
        //window.location.reload();
      }
    });
    alert.present();
    this.refresh();
}

  bonz_toastme(msg:any,ndur:any){
    this.toast.create({
      message:msg,
      duration: ndur
    }).present();
  }
}
