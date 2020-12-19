//get day and time in HH:MM

let h2 = document.querySelector("h2");

let now = new Date ();
let minutes = now.getMinutes(); 
let hours = now.getHours();
let days =[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()]; 

h2.innerHTML = `${day} ${hours}:${minutes}`;

//challenge 2 
//function getCity(event){
  //event.preventDefault();
  //let city = document.querySelector("#city-input");
  //let h1 = document.querySelector("h1");
  //h1.innerHTML = `${city.value}`
//}

//let cityForm = document.querySelector("#city-search-form");
//cityForm.addEventListener("submit", getCity);


function showTemperature(response){
console.log(response.data.main.temp);
let temperature = Math.round(response.data.main.temp);
console.log(temperature);
let h3 = document.querySelector("h3");
h3.innerHTML = `${temperature}°C`;
let visibility = (response.data.weather[0].main);
let h4 = document.querySelector("h4");
h4.innerHTML = `Visbility ${visibility}`;
}


function retrieveCity(city) {
let apiKey = "29a44231d6c7563fcc1740ef29d751ed";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event){
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML=`${city.value}`;
  retrieveCity(city.value);
}

let form = document.querySelector("#city-search-form");
form.addEventListener("submit", handleSubmit);