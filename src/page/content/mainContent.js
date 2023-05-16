export function mainContent() {
    const main = document.querySelector('.main');

    const elements = {
        title: function(){
            const title = main.appendChild(document.createElement('h1'));
            title.setAttribute('class', 'title text-white');
            title.textContent = 'Weather App';
        },
        location: function(){
            // uses weather search api to get location
            const location = main.appendChild(document.createElement('input'));
            location.setAttribute('class', 'location text-white');
            location.textContent = 'Search for a location';
        },
        weatherContainer: function(){
            const weatherContainer = main.appendChild(document.createElement('div'));
            weatherContainer.setAttribute('class', 'weather-container bg-light w-100 h-50');
        }
    };
    elements.title();
    elements.location();
    elements.weatherContainer();
};