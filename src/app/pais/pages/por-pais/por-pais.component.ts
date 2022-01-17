import { Component} from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  
  termino :string  = '';
  hayError:boolean = false;
  paises  :Country[] = [];
  
  constructor( private paisService:PaisService) { }
  
  buscar( termino:string){

    this.termino = termino;
    this.paisService.buscarPais( this.termino )
    .subscribe( (paises) => {
      this.paises = paises;
    });
  }

  sugerencias( termino: string){

  }

}