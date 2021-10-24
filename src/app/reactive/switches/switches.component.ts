import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    genero:["M",Validators.required],
    notificaciones:[true,Validators.required],
    condiciones:[false,Validators.requiredTrue]//ciondiciones no es parte de mi objeto
    //pero esta dentro del formulario

  })

  persona={
    genero:"F",
    notificaciones:true
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    //this.miFormulario.reset(this.persona);
    this.miFormulario.reset({...this.persona,condiciones:false});
    // con esto reseteamos valores y adicionar agregamos la otra propiedad


    //--------------->
    this.miFormulario.valueChanges.subscribe(form=> {
      delete form.codiciones;
      this.persona=form;
    })

    //con esto nos suscribimos y cuando se haga un cambio se asigna el valor automaticamnete
  }
  guardar(){

    const formValue = {...this.miFormulario.value}// es como el angular.copy no altera la referencia
    console.log(formValue);
   // delete formValue.condiciones;
   //si quiero eliminar un valor del formulario
    this.persona=formValue;
    // con esto igualamos los valores pero hasta que demos click en el botom
    
  }

}
