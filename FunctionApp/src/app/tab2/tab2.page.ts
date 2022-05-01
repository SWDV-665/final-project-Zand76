import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ToolsServiceService } from '../tools-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tools = [

  ];
  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private router: Router,
    public toolsService: ToolsServiceService
    ) {}

// Navigate back to selected tools
goToTools() {
  console.log("Nav to TOOLS")
  this.router.navigate(['tabs/tab1'], {
  });
}
// Navigate to tool details
goToDetails(tool) {
  console.log("Nav to DETAILS")
  this.router.navigate(['tabs/tab3'], {
    queryParams: tool
  });
}

loadTools() {
  return this.toolsService.getItems();
}

addTool(tool) {
  console.log("Adding tool")
  return this.toolsService.addTool(tool);
  }
// addTool(tool) {
//   console.log("Adding tool")
//   return this.toolsService.addItem(tool);
//   }
}
