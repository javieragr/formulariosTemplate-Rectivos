import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // miFormulario : FormGroup = new FormGroup({
  //   nombre: new FormControl('rtx 4090ti'),
  //   precio: new FormControl(100),
  //   existencias: new FormControl(3)
  // })
  miFormulario : FormGroup= this.fb.group({
    nombre:[,[Validators.required,Validators.maxLength(3)]],
    precio:[,[Validators.min(0)]],
    existencias:[,[Validators.min(0)]]

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.miFormulario.setValue({
     nombre: 'nuevo',
     precio: 100,
     existencias: 3
    })
  }

  campoValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

    guardar(){
      if(this.miFormulario.invalid){
          this.miFormulario.markAllAsTouched();
        return
      }
      else{
        this.miFormulario.reset();
      }
    }
}
