import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../../share/interfaces/album';

@Component({
  selector: 'app-panel-der',
  imports: [],
  templateUrl: './panel-der.html',
  styleUrl: './panel-der.scss',
})
export class PanelDer {

  @Input() seleccionado: Album | null = null;

  @Output() limpiar = new EventEmitter<void>();

  limpiarSeleccion() {
    this.limpiar.emit();
  }

}
