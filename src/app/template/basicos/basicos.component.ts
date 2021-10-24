import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent   {
  @ViewChild('miFormulario') miFormulario!:NgForm;

  

  nombreValido():boolean{

    return this.miFormulario?.controls.producto?.invalid 
    && this.miFormulario?.controls.producto?.touched
  }
  validaPrecio():boolean{

    return this.miFormulario?.controls.precio?.touched && this.miFormulario?.controls.precio.value <0 
  }

  guardar(){

    // this.miFormulario.resetForm();
    this.miFormulario.resetForm({producto:'',precio:0,existencias:0});
    
  }

}
