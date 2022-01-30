import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/shared/interfaces/weather.interface';
import { GeoLocationService } from 'src/shared/services/geo-location.service';
import { WeatherService } from './pages/services/weather.services';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'amr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherAPP';
  faCoffee = faCoffee;

  public weather$!: Observable<WeatherData>;

  constructor(
    private readonly weatherSvc: WeatherService,
    private readonly geoLocationSvc: GeoLocationService
  ) {
    if (navigator?.geolocation) {
      this.getLocation();
    }

  }

  public onSearch(city: string): void {
    this.weather$ = this.weatherSvc.getWeatherByName(city);
  }

  private async getLocation(): Promise<void> {
    try {
      const { coords } = await this.geoLocationSvc.getCurrentPosition();
      this.weather$ = this.weatherSvc.getWeatherByCoords(coords);
    } catch (error) {
      console.log(error);
    }
  }
}
