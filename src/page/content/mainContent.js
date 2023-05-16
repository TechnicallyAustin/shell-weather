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
        },
        weatherContainer: function(){}
    };
    elements.title();
};