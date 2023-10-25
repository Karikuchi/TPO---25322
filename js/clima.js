const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=880269d0e1baa1a1a412f84136174011&units=metric&lang=es`;
fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log("Ocurrio un error", error))

const mostrarData = (data) => {
    console.log(data)
    let body = ''

    body = `
    
    <div class="clima__titulo">
        <div class="clima__titulo-ciudad titulos">
            ${data.name}
        </div>
        <div class="clima__titulo-descripción">
            ${data.weather[0].description}
        </div>
    </div>
    <div class="clima__datos">
        <div class="clima__datos-icono columna">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
        </div>
        <div class="clima__datos-temperatura columna">
            ${data.main.temp.toFixed(1)}ºC
        </div>
    </div>
    `
    document.getElementById("clima").innerHTML = body
}

/*
feels_like
: 
17.67
humidity
: 
94
pressure
: 
1015
temp
: 
17.42
temp_max
: 
17.85
temp_min
: 
16.57
*/

/*
function showWeather(data){
    const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;

    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);

    const content = document.createElement('div');
    content.innerHTML = `
        <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
        <h2>${degrees}°C</h2>
        <p>Max: ${max}°C</p>
        <p>Min: ${min}°C</p>
    `;

    result.appendChild(content);

    console.log(name);
    console.log(temp);
    console.log(temp_max);
    console.log(temp_min);
    console.log(arr.icon);
}
*/