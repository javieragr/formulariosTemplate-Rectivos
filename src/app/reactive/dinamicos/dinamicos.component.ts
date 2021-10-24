import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miFormulario : FormGroup= this.fb.group({
    nombre:[,[Validators.required,Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['metal Gear',Validators.required],
      ['spidey',Validators.required]
    ],Validators.required)


  })
  nuevoFavorito:FormControl=  this.fb.control('',Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private fb:FormBuilder) { }

  agregarFavorito(){
    if (this.nuevoFavorito.invalid) {
        return;
    }
    else{
     // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value,Validators.required))
      this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value,Validators.required))
      //se puede de las dos formas con formBuilder o con el primero 

      this.nuevoFavorito.reset();
    }

  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    else{this.miFormulario.reset();}

  }
  campoValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }
  eliminar(index: number){
    // this.miFormulario.value.favoritos.splice(index,1);
    // this.favoritosArr.controls.splice(index,1);
    this.favoritosArr.removeAt(index);
    
  }

}
