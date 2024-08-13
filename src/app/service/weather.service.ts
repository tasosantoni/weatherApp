import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  private apiKey='f50f2c5a6fmsh0675b1b01161385p16dc38jsn99b3dfc1fbe5';
  private apiUrl='https://weatherapi-com.p.rapidapi.com/current.json?q=';

  constructor(private http:HttpClient) { }

  searchWeather(city:string):Observable<any>{
    const headers = new HttpHeaders()
     .set("x-rapidapi-key",this.apiKey)
     .set("x-rapidapi-host","weatherapi-com.p.rapidapi.com")

     const option={headers};

     return this.http.get(`${this.apiUrl}/${city}`,option)
  }
}
