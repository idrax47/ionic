import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public alertButtons = ['Aceptar'];
  public alertInputs = [
    {
      label: 'Aprobar alumno',
      type: 'radio',
      value: 'aprobatorio',
    }
  ];
  constructor(public navCtrl: NavController) {}
  
  goToChangePassword() {
    this.navCtrl.navigateRoot("change-password");}
  salir(){
    localStorage.setItem("ingresado","false");
    this.navCtrl.navigateRoot("login");
  }

}
