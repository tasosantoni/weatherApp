import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchForm! : FormGroup;
  weather: any;

  constructor(private fb:FormBuilder,private service:WeatherService){}

  ngOnInit(){
    this.searchForm = this.fb.group({
      city: ["thessaloniki",Validators.required]
    })

    this.searchWeather();
    this.searchForm.controls['city'].setValue(null);
  }

  searchWeather(){
    this.service.searchWeather(this.searchForm.get(['city'])!.value).subscribe((res) => {
      this.weather = res;
    })

  }
}
