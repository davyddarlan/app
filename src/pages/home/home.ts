import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private title: string = 'Saúde da Pessoa Idosa';

  constructor(public navCtrl: NavController) {
  }

}
