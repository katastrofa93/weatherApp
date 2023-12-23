 //https://home.openweathermap.org/api_keys
 const apiKey = 'dd5eeeb050a54aa3a77191713231812';
 const getWeather = document.getElementById('getWeather__submit');
 const main__section = document.querySelector('.main_showWeather');
 let getWeather__city = document.getElementById('getWeather__city');
 console.log(window.location.href);


 const translateCountry = {
     'Russia':'Россия',
     'russia':'россия',
 }
 
 
 let translateCity = {
    zavolzhye: 'Заволжье',
    Zavolzhye: 'Заволжье',
    Заволжье: 'Zavolzhye',
    заволжье: 'Zavolzhye',
    Россия: 'Russia',
    Russia: 'Россия',
 }

function viewCurrentWeather(country,city,temp,img,text){
    if(city in translateCity){ 
        html = `<article class="current">
                        <div class="current__cart">
                            <span class="current__country">${translateCity[country]}</span>
                            <span class="current__city">${translateCity[city]}</span>
                            <span class="current__temp">${temp}℃</span>
                            <img src="${img}" alt="img" class="current__img">
                            <span class="current__temp">${text}</span>
                        </div>
                    </article>`;
        main__section.insertAdjacentHTML('beforeend', html);
    }else{
        html = `<article class="current">
                    <div class="current__cart">
                        <span class="current__country">${country}</span>
                        <span class="current__city">${city}</span>
                        <span class="current__temp">${temp}℃</span>
                        <img src="${img}" alt="img" class="current__img">
                        <span class="current__temp">${text}</span>
                    </div>
                </article>`;
        main__section.insertAdjacentHTML('beforeend', html);
    }  
}
function viewForecastWeather(country,city,tempMax,tempMin,date,img,text){
    if(city in translateCity){ 
        html = `<article class="current">
                        <div class="current__cart">
                            <span class="current__country">${translateCity[country]}</span>
                            <span class="current__city">${translateCity[city]}</span>
                            <span class="current__temp">max ${tempMax}℃</span>
                            <span class="current__temp">min ${tempMin}℃</span>
                            <span class="current__temp">${date}</span>
                            <img src="${img}" alt="img" class="current__img">
                            <span class="current__temp">${text}</span>
                        </div>
                    </article>`;
        main__section.insertAdjacentHTML('beforeend', html);
    }else{
        html = `<article class="current">
                    <div class="current__cart">
                        <span class="current__country">${country}</span>
                        <span class="current__city">${city}</span>
                        <span class="current__temp">max ${tempMax}℃</span>
                        <span class="current__temp">min ${tempMin}℃</span>
                        <span class="current__temp">${date}</span>
                        <img src="${img}" alt="img" class="current__img">
                        <span class="current__temp">${text}</span>
                    </div>
                </article>`;
        main__section.insertAdjacentHTML('beforeend', html);
    }  
}
 
async function toFetch(query){
    let href = query;
    let request = await fetch(href);
    if(request.ok){
        let promis = request.json();
        promis.then((result)=>{
            console.log(result);
            country = result.location.country;
            city = result.location.name;
            temp = result.current.temp_c;
            img = result.current.condition.icon;
            text = result.current.condition.text;
            tempForecast = result.forecast.forecastday;
            if(window.location.href === 'http://weatherapp/'){
                viewCurrentWeather(country, city, temp, img, text);  
            }else if(window.location.href === 'http://weatherapp/ten'){
                for(key in tempForecast){
                    maxT = tempForecast[key].day.maxtemp_c;
                    minT = tempForecast[key].day.mintemp_c;
                    date = tempForecast[key].date;
                    viewForecastWeather(country,city,maxT,minT,date,img,text);
                } 
            }     
        })
    }
}

 
 getWeather.addEventListener('click', async (e)=>{
     e.preventDefault();
     let input = getWeather__city.value;
     if(input == ''){
         console.log('Введите город');
     }else{    
        if(input in translateCity){
            toFetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${translateCity[input]}&days=10`);
        }else{
            toFetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${getWeather__city.value}&days=10`);
        }
         
     } 
 })