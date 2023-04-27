import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';

import { FormsModule } from '@angular/forms';

import { TablaAlumnoComponent } from '../tabla-alumno/tabla-alumno.component';
import { DetalleAlumnoComponent } from '..//detalle-alumno/detalle-alumno.component';
import { FormAlumnoComponent } from '../form-alumno/form-alumno.component';
import { FormMateriaComponent } from '../materia/form-materia/form-materia.component';
import { DetalleMateriaComponent } from '../materia/detalle-materia/detalle-materia.component';
import { TablaMateriaComponent } from '../materia/tabla-materia/tabla-materia.component';
import { ListadoMateriaComponent } from '../materia/listado-materia/listado-materia.component';
import { ListadoAlumnoComponent } from '../alumno/listado-alumno/listado-alumno.component';

@NgModule({
  declarations: [
    AdminComponent,
    TablaAlumnoComponent,
    DetalleAlumnoComponent,
    FormAlumnoComponent,
    FormMateriaComponent,
    DetalleMateriaComponent,
    TablaMateriaComponent,
    ListadoMateriaComponent,
    ListadoAlumnoComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    AdminComponent
  ]
})
export class ModuloInputOutPutModule { }
