import { Component, OnInit } from '@angular/core';
import { Catalogo } from 'src/app/interfaces/catalogo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { DatePipe } from '@angular/common';

interface CatalogosPorCategoria {
  [categoria: string]: Catalogo[];
}

@Component({
  selector: 'app-datos_maestros',
  templateUrl: './datos_maestros.component.html',
  styleUrls: ['./datos_maestros.component.css']
})
export class Datos_maestrosComponent implements OnInit {
  loading = false;
  catalogosPorCategoria: CatalogosPorCategoria = {};

  constructor(
    private _catalogo: CatalogoService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getListCatalogo();
  }

  getListCatalogo() {
    this._catalogo.getListCatalogo().subscribe(data => {
      this.catalogosPorCategoria = {};

      data.forEach(item => {
        const fechaFormateada = this.datePipe.transform(item.updated_at, 'dd-MM-yyyy');

        if (!this.catalogosPorCategoria[item.idcategoriacatalogo]) {
          this.catalogosPorCategoria[item.idcategoriacatalogo] = [];
        }

        this.catalogosPorCategoria[item.idcategoriacatalogo].push({ ...item, updated_at: fechaFormateada });
      });

      console.log(this.catalogosPorCategoria);
      this.loading = false;
    });
  }

  editarCatalogo(id: any) {
    console.log(id);
  }

  nuevoCatalogo() {
    //this.router.navigate(['nuevo']);
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
