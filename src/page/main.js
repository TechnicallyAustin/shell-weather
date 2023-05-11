export function buildMain(){
    const page = document.querySelector(".page-content");
    const elements = {
        main: null,
        newMain: function(){
            const main = page.appendChild(document.createElement("main"))
            main.setAttribute("class", "main w-100 h-100 bg-dark")
            this.main = main
        },
        cardContainer: function(){
            const container = this.main.appendChild(document.createElement("div"))
            container.setAttribute("class", "card-container")
        }
    }
    elements.newMain()
    elements.cardContainer()
}