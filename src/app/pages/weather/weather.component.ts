import { WeatherData } from 'src/shared/interfaces/weather.interface';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amr-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {

  @Input() public weather!: WeatherData;
  public BASE_URL = 'http://openweathermap.org/img/wn';
}
