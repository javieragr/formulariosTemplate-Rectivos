import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { PruebaFormularioComponent } from './formulario/prueba-formulario/prueba-formulario.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  { 
    path:'',
    children:[
      {path:'basicos',component:BasicosComponent},
      {path:'dinamicos',component:DinamicosComponent},
      {path:'switches',component:SwitchesComponent},
      {path:'formulario',component:PruebaFormularioComponent},
      {path:'**',redirectTo:'basicos'}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
})
export class TemplateRoutingModule { }
