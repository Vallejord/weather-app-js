const key = "KZUQ4h1HACZGHj52gDgT5qGUpwrAjMK7";

//get weather information
const getWeather = async (id) => {
  const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0];
};

//get city information
const getCity = async (city) => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  // el ? significa query string
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0];
};

// getCity("Capilla del Monte").then(data => {
//   return getWeather(data.Key);
//   }).then( data => {
//       console.log(data);
//   }).catch((err) => console.log(err));
