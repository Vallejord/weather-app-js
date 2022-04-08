class Forecast {
  constructor() {
    this.key = "KZUQ4h1HACZGHj52gDgT5qGUpwrAjMK7";
    this.weatherURL =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityUrl =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);

    // object shorthand notation, when key and value are the same
    return {
      cityDetails,
      weather,
    };
  }
  async getCity(city) {
    // el ? significa query string
    const query = `?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityUrl + query);
    const data = await response.json();

    return data[0];
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;

    const response = await fetch(this.weatherURL + query);
    const data = await response.json();

    return data[0];
  }
}
