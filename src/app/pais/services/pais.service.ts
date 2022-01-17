import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap} from 'rxjs';
import { Country } from '../interface/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';


  constructor(private http:HttpClient) { }

  get httpParams( ){
    return new HttpParams().set('fields', 'name,capital,population,flags,fifa')
  }

  buscarPais( termino:string ):Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<Country[]>( url, {params:this.httpParams} );

  }

  buscarCapital( termino:string ):Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`

    return this.http.get<Country[]>( url, {params:this.httpParams} );

  }

  getPaisPorId( id:string ):Observable<Country>{

    const url = `${this.apiUrl}/alpha/${id}`

    return this.http.get<Country>( url );

  }
  
  getRegiones( termino: string ):Observable<Country[]>{

    const url = `${this.apiUrl}/region/${termino}`

    return this.http.get<Country[]>( url, {params: this.httpParams} )
      .pipe(
        tap( console.log )
      )
  }


}
