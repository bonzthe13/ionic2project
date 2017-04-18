import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Injectable()
export class DataService {
  ldata: boolean=false;
  items: any ;
  mydata:string='';
  nrow:number=0;
  constructor(public storage: Storage,public toast:ToastController) {  };

  do_check_data(val:any){
    val = val.replace(/^\s+|\s+$/g, '');
     this.ldata=false;
    console.log('for checking...('+val+').');
    if(val!=null) {
      this.storage.get('myStored').then((data) => {
        console.log("my Data : " + data);
        if (data != null) {
            this.items = data;
            let array = [];
            array=this.items;
            console.log('Current data on record '+array);
        for (var item in array) {
          let mstr = data[item].replace(/^\s+|\s+$/g, '');
          console.log(val + ' = ' + data[item]);
          if (val == mstr) {
            this.ldata = true;
            break;
          }
        }
      }
        if(!this.ldata){
          console.log('Current record...'+data+' new record :'+val);
          if (data != null ) {
            this.mydata = data;
            if (this.mydata != ''){
              data.push(val);
             this.storage.set('myStored', data);
             }else{
               let array=[];
               array.push(val)
               this.storage.set('myStored', array);
            }
          } else {
                 let array=[];
                  array.push(val)
                  this.storage.set('myStored', array);
          }
            //alert('Current project name('+val+') has been successfully added...');
          this.bonz_toastme('Current project name('+val+') has been successfully added...',3000);
        }else{
          //alert('Current project name('+val+') already exist...');
          this.bonz_toastme('Current project name('+val+') already exist...',3000);
        }
      });
    }
  };

  // do_delete_entry(cdata:any){
  //   this.mydata='';
  //   this.nrow=0;
  //   if(cdata!=null ){
  //     this.storage.get('myStored').then((data) => {
  //       console.log("my data for deletion : " + cdata);
  //       //this.items = data;
  //       let array = [];
  //       array.push(data);
  //       for (var item in array) {
  //         console.log(cdata + ' = ' + data[item]);
  //         if (cdata != data[item]) {
  //           if(this.nrow=0) {
  //             this.mydata=data[item];
  //           }else{
  //             this.mydata = this.mydata+', '+data[item];
  //           }
  //           this.nrow++;
  //         }
  //       }
  //       console.log('New data after deletion'+this.mydata);
  //       if( this.mydata!=null) {
  //         if (this.mydata.trim() != '') {
  //         let marry = [];
  //         marry.push(this.mydata);
  //           this.storage.set('myStored', marry);
  //          // alert('Select project ' + cdata + ' has been successfully deleted...');
  //        }else{
  //           this.storage.set('myStored', '');
  //         }
  //         alert('Select project ' + cdata + ' has been successfully deleted...');
  //       }
  //     });
  //   }
  // }

  do_delete_all(){
    this.storage.set('myStored', '');
    //alert("All project has been successfully deleted...");
    this.bonz_toastme('All project has been successfully deleted...',3000);
  }

  bonz_toastme(msg:any,ndur:any){
    this.toast.create({
      message:msg,
      duration: ndur
    }).present();
  }
}
