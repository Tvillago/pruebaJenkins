import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) { }
  buscar(){
    const query = this.txtBuscar.nativeElement.value;
    if(query.trim().length === 0){
      return ;
    }
    this.gifsService.buscarGifs(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value=""
  }

  

}
