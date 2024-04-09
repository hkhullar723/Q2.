const apiKey = 'fc1b9a9abd73e918140c9001aa11ca56'; // replace with your API key 

 const url = `https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=fc1b9a9abd73e918140c9001aa11ca56&units=metric`;
fetch(url) 

.then((response) => response.json()) 

.then((data) => 
{ const currentWeather = data.main;
     const temp = currentWeather.temp; 
    const description = data.weather[0].description;
     const weatherElement = document.getElementById('weather');
      weatherElement.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Temperature: ${temp}°C<br><br>Description: ${description}`; }) 
      
      .catch((error) =>
      
      { console.error('Error fetching weather data:', error); 
    });