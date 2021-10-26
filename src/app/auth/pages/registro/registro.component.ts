import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  
})
export class RegistroComponent implements OnInit {

  // nombreApellidoPattern:string='([a-zA-Z]+) ([a-zA-Z]+)';
  // emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // noPuedeSerStrider(control:FormControl){
  //   const valor = control.value?.trim().toLowerCase();
  //   if (valor==='striders') {
  //     // error
  //     return {noStrider:true}
  //   }else{
  //     return null
  //   }
  // }

  miFormulario:FormGroup= this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)]],
    userName:['',[Validators.required,this.validatorService.noPuedeSerStrider ], ]
  })

  constructor(private fb:FormBuilder,private validatorService:ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Fernando Herrera',
      email:'ferni@gmail.com',
      useName:'usuarioAAA'
    })
  }
  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched
  }
  submitFormulario(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();

    }
    
  }

}
