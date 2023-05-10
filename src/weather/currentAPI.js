// requests from WEATHER API
    // REALTIME API
    // FORECAST API
    // FUTURE API
    // SEARCH API


function current(){

    currentWeather = {
        url: process.env.URL,
        now: `${url}/current.json`,
        forcast: `${url}/forcast.json`,
        futureForecast: `${url}/future.json`
    }

    // different request parameters
    currentRequest = {
        key: process.env.API_KEY,
        //query: // let q = User input from search bar
    };
}


//function future(){}

//function fortnight(){}


