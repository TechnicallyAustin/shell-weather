export function mainContent() {
    const main = document.querySelector('.main');

    const elements = {
        title: function(){
            const title = main.appendChild(document.createElement('h1'));
            title.setAttribute('class', 'title text-white ms-2');
            title.textContent = 'Shell Weather';
        },
        location: function(){
            // uses weather search api to get location
            const location = main.appendChild(document.createElement('input'));
            location.setAttribute('class', 'location text-white ms-2 w-50 py-2 rounded-pill');
            location.textContent = 'Search for a location';
        },
        weatherContainer: function(){
            const weatherContainer = main.appendChild(document.createElement('div'));
            weatherContainer.setAttribute('class', 'weather-container ms-3 bg-light h-75 rounded');
        }
    };
    elements.title();
    elements.location();
    elements.weatherContainer();
};