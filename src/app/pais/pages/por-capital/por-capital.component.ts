import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  hayError:boolean = false;
  termino:string = '';
  capitales  :Country[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    this.termino = termino;
    this.paisService.buscarCapital( this.termino )
    .subscribe( (capital) => {
      this.capitales = capital;
    });
  }

  sugerencias( termino: string ) {
    
  }
}
