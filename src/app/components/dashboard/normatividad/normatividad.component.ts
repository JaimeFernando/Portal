import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-normatividad',
  templateUrl: './normatividad.component.html',
  styleUrls: ['./normatividad.component.css']
})
export class NormatividadComponent implements OnInit {

  public carpetasPDF = [
    {
      nombre: 'Modelo del Gobierno del Datos',
      archivos: [
        { nombre: 'Documento en proceso de validación que contiene los procesos relacionados con la gestión de la información a nivel Estatal, la cual está plasmada en el Reglamento Interior de la Secretaría de Finanzas, Inversión y Administración, del Gobierno del Estado de Guanajuato.', 
        ruta: '../../assets/src/normatividad/Modelo_del_Gobierno_del_Datos.pdf',
      fecha: '02/10/2020' }
      ]
    },
    {
      nombre: 'Documentación',
      archivos: [
        { nombre: 'Diagrama de Categorías y Subcategorías - iGto', ruta: '../../assets/src/normatividad/Diagrama_de_Categorias_y_Subcategorías_iGto.pdf', fecha: '24/02/2023'  },
        { nombre: 'Catálogos relacionados con Obras y Acciones - iGto', ruta: '../../assets/src/normatividad/Catalogos_relacionados_con_Obras_y_Acciones_iGto.pdf', fecha: '04/11/2019' },
      ]
    },
  ];

  public obtenerURLSegura(ruta: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(ruta);
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
