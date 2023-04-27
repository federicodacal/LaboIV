ng g c /pages/input/admin


ng g c /pages/input/alumno/formAlumno


ng g c /pages/input/alumno/detalleAlumno


ng g c /pages/input/alumno/tablaAlumno


ng g c /pages/input/alumno/listadoAlumno


ng g c /pages/input/materia/formMateria


ng g c /pages/input/materia/DetalleMateria


ng g c /pages/input/materia/tablaMateria

ng g c /pages/input/materia/listadoMateria


ng g module /pages/input/ModuloInputOutPut

ngStyle
    admin 101 
    detalle 12


ngClass
    admin 38


ngSwitch
    admin  41
    admin   74
    admin  87

 *ngIf
    admin 44-55
    detalle 1
    detalle 6
    formAlumno 1
    formAlumno 8

*ngIf="estado=='cargado' else loading"
    admin 90

ng-template
    admin 97

[src]
    admin 101
    detalle 12

*ngFor
    tabla 18
    listado 2 "let alumno of listadoAlumnos ; let i = index"