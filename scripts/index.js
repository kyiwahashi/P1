// Author: Kory
// Created: 04/29/22
// Last Updated: 04/30/22

// Changes color of links when mouse hovers over link

let link1 = document.querySelector('.link1')


link1.addEventListener('mouseover', changeLink)

function changeLink(){
    link1.style.color = "white"
}

link1.addEventListener('mouseout', changeLinkBack)

function changeLinkBack(){
    link1.style.color = "blue";
}

let link2 = document.querySelector('.link2')


link2.addEventListener('mouseover', changeLink2)

function changeLink2(){
    link2.style.color = "white"
}

link2.addEventListener('mouseout', changeLinkBack2)

function changeLinkBack2(){
    link2.style.color = "blue"
}

// Successful OpenWeather API console.log

// let city = "Northridge";
// let state = "CA";
// let api = "c50a97c8b5f6224e487ca758f4df264e";

// fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state + '&appid=' + api)
//     // Handle success
//     .then(response => response.json())  // convert to json
//     .then(json => console.log(json))    //print data to console
//     .catch(err => console.log('Request Failed', err)); // Catch errors



// Public API Call using async function

let searchBtn = document.querySelector('#search-button');
searchBtn.addEventListener('click', fetchResults);
// let searchresults = document.querySelector('.search-results');
// searchresults.addEventListener('click', fetchResults);


// Async Await another way of getting same results as Promises, but with less .then statements.
// The try and catch acts the same way as the response/reject parameters of promises. If successful the code in the try block will execute. If not, the code in the catch block will execute.

async function fetchResults (){
    try {
        let api = "c50a97c8b5f6224e487ca758f4df264e";
        let city = document.querySelector('#cityID').value;
        let state = document.querySelector('#countryID').value;
        let results = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state + '&appid=' + api)
        let parsedresults = await results.json();  // convert to json
        console.log(parsedresults);
        let searchresults = document.querySelector('.search-results');
        searchresults.innerHTML = '';
        let kelvin = parsedresults.main.temp;
        let temperature = 1.8 * (kelvin - 273) + 32;
        let F = Math.round(temperature);
        let weather = parsedresults.weather[0].description;
        let wind = `${parsedresults.wind.speed} mph`;
        searchresults.innerHTML = `The temperature in ${city} is currently ${F}F. Weather condition is ${weather} and wind speed is ${wind}`
    } catch (err) {
        console.log(err);
        let searchresults = document.querySelector('.search-results');
        searchresults.innerHTML = '';
        searchresults.innerHTML = `City not found. Please try again.`

    }
    

    
}


