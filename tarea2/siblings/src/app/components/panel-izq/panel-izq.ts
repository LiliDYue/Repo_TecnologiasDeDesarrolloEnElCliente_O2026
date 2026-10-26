import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../../share/interfaces/album';

@Component({
  selector: 'app-panel-izq',
  imports: [],
  templateUrl: './panel-izq.html',
  styleUrl: './panel-izq.scss',
})
export class PanelIzq {

  @Input() elementos: Album[] = [];

  @Input() seleccionado: Album | null = null;

  @Output() elementoSeleccionado = new EventEmitter<Album>();

  seleccionar(elemento: Album) {
    this.elementoSeleccionado.emit(elemento);
  }

}
