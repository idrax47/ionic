import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formularioLogin: FormGroup;

  constructor(public fb : FormBuilder, public navCtrl : NavController, public alertCtrl : AlertController) { 
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var formulario = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario')!);

    if (usuario.nombre == formulario.nombre && usuario.password == formulario.password)
    {
      this.navCtrl.navigateRoot('home');
    }
    else
    {
      const alerta = await this.alertCtrl.create({
        header: 'Datos incorrectos',
        message: 'Los datos ingresados no son correctos',
        buttons: ['Aceptar']
      });

      await alerta.present();
    }
  }

}
