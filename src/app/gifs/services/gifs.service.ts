import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string = 'RL0DEsDi4StjMF6AupsVGHE2HlsXtjTo';
  private  _historial: string[] = [];
  private servicioUrl: string = "https://api.giphy.com/v1/gifs";
  public resultados: Gif[] = [];

  get historial(){
    
    return [...this._historial]
  }

  constructor(private http: HttpClient) {
    const historial = localStorage.getItem('historial');
    if(historial){
      this._historial = JSON.parse(historial);
    }
    const resultados = localStorage.getItem('resultados');
    if(resultados){
      this.resultados = JSON.parse(resultados);
    }


   }

  

  buscarGifs(query: string){
    query = query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
     
    }
    const params = new HttpParams().set('api_key', this.apiKey).set('q', query).set('limit', '10');
    this.http.get<SearchGIFResponse>(`${this.servicioUrl}/search`, {params:params})
    .subscribe((resp) =>{
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })
    
    
  }
}