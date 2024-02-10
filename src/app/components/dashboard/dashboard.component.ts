import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  urlImagen =
    'https://st.depositphotos.com/1000792/2615/v/450/depositphotos_26158065-stock-illustration-weather-icons.jpg';
  urlImagen2 = "/assets/img.jpg";
  ciudad = '';
  loading = false;
  query = false;
  temperatura = 0;
  humedad = 0;
  clima = '';
  mostrarError = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void { }

  obtenerClima() {
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(
      (data) => {
        this.loading = false;
        this.query = true;
        this.temperatura = Math.round(data.main.temp - 273);
        this.humedad = data.main.humidity;
        this.clima = data.weather[0].main;
      },
      (error) => {
        this.loading = false;
        this.error();
      }
    );
  }

  error() {
    this.mostrarError = true;
    this.query = false;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }
}
