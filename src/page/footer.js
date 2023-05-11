export function buildFooter(){
    const page = document.querySelector(".page-content");
    const elements = {
        footer: null,
        newFooter: function(){
            const footer = page.appendChild(document.createElement("footer"));
            footer.setAttribute("class", " bg-info footer w-100 h-100")
            this.footer = footer 
        },
        footerContent: function(){
            // footer content will go here.
        }
    }
    elements.newFooter();
    elements.footerContent();
}