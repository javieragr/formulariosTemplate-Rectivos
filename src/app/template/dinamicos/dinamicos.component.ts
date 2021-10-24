import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';


interface Persona{
  nombre:string;
  favoritos:Favorito[]
}
interface Favorito{
  id:number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})

export class DinamicosComponent  {

  persona:Persona={

    nombre:'culo',
    favoritos:[
      {id:1,nombre:'far cry 6'},
      {id:2,nombre:'GTA 5'}
    ]
  }
nuevoJuego:string ='';
agregar(){
  const nuevo:Favorito ={id:this.persona.favoritos.length+1,nombre:this.nuevoJuego}
  
  this.persona.favoritos.push(nuevo)
  this.nuevoJuego='';
}

eliminar(i:number){
  this.persona.favoritos.splice(i,1)
}
  guardar(){

  }
}
