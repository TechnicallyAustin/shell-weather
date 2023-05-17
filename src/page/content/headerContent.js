export function headerContent(){
    const header = document.querySelector('.header');
    const elements = {
        title: function(){
            const title = header.appendChild(document.createElement("p"));
            title.setAttribute("class", "header-title text-white fs-2");
            title.textContent = "My Locations";
        },
        savedLocations: function(){}
    };
    elements.title()
    elements.savedLocations()

}