import { Component } from '@angular/core';
import { PanelDer } from '../panel-der/panel-der';
import { PanelIzq } from '../panel-izq/panel-izq';
import { Album } from '../../share/interfaces/album';

@Component({
  selector: 'app-padre',
  imports: [PanelDer, PanelIzq],
  templateUrl: './padre.html',
  styleUrl: './padre.scss',
})

export class Padre {

  elementos: Album[] = [
    { album: 'Sirena',
      banda: 'División Minúscula',
      anio: 2008
    },
    { album: 'Una vida no es suficiente',
      banda: 'Insite',
      anio: 2007
    },
    { album: 'Meteora',
      banda: 'Linkin Park',
      anio: 2003
    },
    { album: 'Follow the Leader',
      banda: 'Korn',
      anio: 1998
    },
    { album: 'Night visions',
      banda: 'Imagine Dragons',
      anio: 2012
    }
  ];

  seleccionado: Album | null = null;

  seleccionarElemento(elemento: Album) {
    this.seleccionado = elemento;
  }

  limpiarSeleccion() {
    this.seleccionado = null;
  }

}
