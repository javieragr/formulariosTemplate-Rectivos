import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMinDirective } from './directives/custom-min.directive';
import { PruebaFormularioComponent } from './formulario/prueba-formulario/prueba-formulario.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    CustomMinDirective,
    PruebaFormularioComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // FlexLayoutModule
  ]
})
export class TemplateModule { }
