export function mainContent() {
    const main = docuement.querySelector('.main');

    const elements = {
        title: function(){
            const title = main.appendChild(document.createElement('h1'));
            title.classList.add('title');
            title.textContent = 'Weather App';
        },
        location: function(){
            // uses weather search api to get location
        },
        weatherContainer: function(){}
    };
    elements.title();
};