import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '4d229b86f86b229aaabd4142aca49944';
  constructor(private http: HttpClient) {}

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + ciudad + '&lang=es';
    return this.http.get(URL);
  }
}
