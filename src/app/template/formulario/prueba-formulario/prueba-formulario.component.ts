import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba-formulario',
  templateUrl: './prueba-formulario.component.html',
  
})
export class PruebaFormularioComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  formulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(5)]],
    edad:[0,[Validators.min(0),Validators.required]]
  })

}
