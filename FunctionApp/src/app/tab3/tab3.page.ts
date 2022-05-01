import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  toolId;
  tool: any = {};

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe( res =>{
      console.log(res);
      this.tool = res;
    });

  }
  // Navigate back to available tools
  goToSelect() {
    console.log("Nav to SELECT")
    this.router.navigate(['tabs/tab2'], {
    });
  }

}
