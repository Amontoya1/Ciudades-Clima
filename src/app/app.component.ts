import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'amr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherAPP';

  public weather$!: Observable<any>;
}
