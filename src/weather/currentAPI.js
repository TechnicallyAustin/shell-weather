function current(){
    currentWeather = {
        URL: "http://api.weatherapi.com/v1",
        now: `${url}/current.json`,
        forcast: `${url}/forcast.json`,
        futureForecast: `${url}/future.json`
    }

    currentRequest = {
        key: process.env.API_KEY,
        //query: // let q = User input from form
    };
}


//function future(){}

//function fortnight(){}


