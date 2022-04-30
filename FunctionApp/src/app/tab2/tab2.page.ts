import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tools = [
    {
      id: '01',
      name: 'Camera',
      icon: 'camera-sharp',
      image: 'screenshot',
      price: 123,
      desc: 'Description of the tool and how it works.'    },
    {
      id: '02',
      name: 'Light',
      icon: 'flashlight-sharp',
      image: 'screenshot',
      price: 123,
      desc: 'Description of the tool and how it works.'    },
    {
      id: '03',
      name: 'Scanner',
      icon: 'barcode-sharp',
      image: 'screenshot',
      price: 123,
      desc: 'Description of the tool and how it works.'    },
  ];

  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private router: Router,
    ) {}

// Navigate back to selected tools
// goToTools() {
//   this.router.navigateByUrl('/tabs/tab1');
// }
goToTools() {
  this.router.navigate(['tabs/tab1'], {
  });
}
goToDetails(tool) {
  this.router.navigate(['tabs/tab3'], {
    queryParams: tool
  });
}


// AsctionSheet options - Select tools
async presentActionSheet(tool) {
  const actionSheet = await this.actionSheetController.create({
    header: tool.name,
    cssClass: 'my-custom-class',
    buttons: [
    {
      text: 'Add',
      icon: 'bag-add-sharp',
      data: 10,
      handler: () => {
        console.log('Add clicked');
      }
    },
    {
      text: 'Details',
      icon: 'eye-sharp',
      handler: () => {
        console.log('Details clicked');
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
