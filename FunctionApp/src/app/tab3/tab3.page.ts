import { Component, OnInit } from '@angular/core';
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

  // ngOnInit() {
  //   const category = this.route.snapshot.paramMap.get('id');
  //   console.log(`category: ${category}`);
  // }

  }
  // Navigate back to available tools
  goToSelect() {
    this.router.navigate(['tabs/tab2'], {
    });
  }

}
