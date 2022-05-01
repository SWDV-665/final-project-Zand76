import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { ToolsServiceService } from '../tools-service.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';



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
  lat;
  lon;

  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private router: Router,
    private camera: Camera,
    private flashlight: Flashlight,
    public toolsService: ToolsServiceService,
    private geo: Geolocation
    ) {}

  // Navigate back to available tools
  goToSelect() {
    console.log("Nav to SELECT")
    this.router.navigate(['tabs/tab2'], {
    });
  }

  loadTools() {
    return this.toolsService.getTools();
  }

  removeTool(tool, index) {
    console.log("Removing Tool - ", tool, index);
    this.toolsService.removeTool(index);
  }

  getGeoLocation() {
    console.log("Starting Geolocation")
    this.geo.getCurrentPosition({
      timeout: 5000,
      enableHighAccuracy: true
    }).then((res)=>{
      this.lat = res.coords.latitude;
      this.lon = res.coords.longitude;
    }).catch((err)=>{
      console.log(err);
    });
  }

  getFlashlight() {
    console.log("Starting Flashlight")
    this.flashlight.switchOn();
  }

  getCamera() {
    console.log("Starting Camera")
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

}

