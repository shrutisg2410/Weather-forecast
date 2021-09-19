import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { celciussuffix } from './celciussuffix.pipe';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  apiKey = '371d4e84f04f4e6eafe38174f3de11e5';
  private url = 'https://api.weatherbit.io/v2.0/forecast/daily';

  cities = ['Raleigh', 'New York', 'Chicago', 'Los Angeles', 'Houston'];
  selectedCity = 'Raleigh';
  foreCastData = [];

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getFiveForecastData();
  }

  /**
   * Method to get the five forecast data based on the selected city.
   */
  getFiveForecastData() {
    this.spinner.show();
    const params = {
      city: this.selectedCity,
      days: 5,
      key: this.apiKey,
    };

    this.http.get(this.url, { params }).subscribe(
      (res: any) => {
        this.foreCastData = res.data;
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
        this.spinner.hide();
      }
    );
  }

  /**
   * Method to get the selected city from dropdown.
   */
  onCityChange(ev) {
    this.selectedCity = ev.target.value;
  }

  /**
   * Method to call on Apply button.
   */
  applyChanges() {
    this.getFiveForecastData();
  }
}
