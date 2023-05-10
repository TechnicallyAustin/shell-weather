// This is a controller that will import the api call modules
    // import weatherController to index.js

export function weatherController(){
    const url = process.env.URL
    const apiKey = process.env.API_KEY

    const weather = {
        current: async function(){
            const response = await fetch(url, {mode: `cors`});
            const json = await response.json();
            console.log(json)
        },
        forecast: async function(){

        },
        future: async function(){

        },
        search: async function(){

        }
    }
    weather.current()


}

