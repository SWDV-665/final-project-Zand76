import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
@Injectable({
  providedIn: 'root',
})
export class Tab1Page {

  title = 'Functions App';
  imgURL;

  tools = [];

  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    public toastCtrl: ToastController,
    private router: Router,
    private camera: Camera,
    private flashlight: Flashlight
    ) {}

  // Navigate back to available tools
  goToSelect() {
    this.router.navigate(['tabs/tab2'], {
    });
  }

  getFlashlight() {
    this.flashlight.switchOn();
  }

  getCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res) => {
      this.imgURL = res;
     }, (err) => {
      // Handle error
      console.log(err);
     });
  }
  // getGallery() {
  //   this.camera.getPicture({
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     destinationType: this.camera.DestinationType.DATA_URL
  //   }).then((res) => {
  //     this.imgURL = 'data:image/jpeg;base64,' + res;
  //    }, (err) => {
  //     // Handle error
  //     console.log(err);
  //    });
  // }

  // ActionSheet options - Use selected tools
  async presentActionSheet(tool) {
    const actionSheet = await this.actionSheetController.create({
      header: tool.name,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Start',
          icon: 'caret-forward-circle',
          data: 'Data value',
          handler: () => {
            console.log('Start clicked');
          }
        },
        {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Cancel',
        icon: 'close-circle-sharp',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
    }
  }

