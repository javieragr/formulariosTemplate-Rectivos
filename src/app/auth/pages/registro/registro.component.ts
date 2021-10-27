import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, FormControl, ValidationErrors } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

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
    email:['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    userName:['',[Validators.required,this.validatorService.noPuedeSerStrider ], ],
    password:['',[Validators.required,Validators.minLength(6)] ],
    verificarPassword:['',[Validators.required], ]
  },{
    validators:[this.validatorService.camposIguales('password','verificarPassword')]

  })

  // emailErrorMsg:string="";
  get emailErrorMsg():string{
    
    
    // const error= this.miFormulario.get('email')?.errors;
    // console.log(error);
    // if (error?.required) {
    //   return 'El email es requerido'
    // }
    // else if(error?.pattern)
    // {return 'El email ingresado no cumple con el formato correcto'}
    // else if (error?.emailTomado) {
    //   return 'El email ya existe'
    // }
    return'fgfff'

  }
  constructor(private fb:FormBuilder,private validatorService:ValidatorService, 
    private emailValidator:EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Fernando Herrera',
      email:'test1@test.com',
      useName:'usuarioAAA',
      password:'123456',
      verificarPassword:'123456'

    })
  }
  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched
  }



  emailRequired(){
    return this.miFormulario.get('email')?.errors?.required
          && this.miFormulario.get('email')?.touched
  }
  emailFormato(){
    return this.miFormulario.get('email')?.errors?.pattern
          && this.miFormulario.get('email')?.touched
  }
  emailTomado(){
    return this.miFormulario.get('email')?.errors?.emailTomado
          && this.miFormulario.get('email')?.touched
  }




  submitFormulario(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();

    }
    
  }

}
