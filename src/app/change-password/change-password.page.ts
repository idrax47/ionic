// change-password.page.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-change-password',
  templateUrl: 'change-password.page.html',
  styleUrls: ['change-password.page.scss'],
})
export class ChangePasswordPage {

  formularioRegistro: FormGroup;

  constructor(public fb:FormBuilder, public alertCtrl: AlertController, public navCtrl: NavController) { 
    this.formularioRegistro = this.fb.group({
      'oldPassword': new FormControl("",Validators.required),
      'newPassword': new FormControl("",Validators.required)
    })
  }

  async guardar()
  {
    var formulario = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid){
      const alerta = await this.alertCtrl.create({
        header: "Datos incompletos",
        message: "Tienes que llenar todos los datos",
        buttons: ['Aceptar']
      });

      return;
    }

    var usuario = {
      nombre:formulario.nombre,
      password:formulario.password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
    
  }
}
