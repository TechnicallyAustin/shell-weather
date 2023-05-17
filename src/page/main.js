export function buildMain(){
    const page = document.querySelector(".page-content");
    const elements = {
        main: null,
        newMain: function(){
            const main = page.appendChild(document.createElement("main"))
            main.setAttribute("class", "main bg-dark")
            this.main = main
        }
    }
    elements.newMain()
}