export function buildHeader(){
    const page = document.querySelector(".page-content")
    const elements = {
        header: null,
        newHeader: function(){
            const header = page.appendChild(document.createElement("header"));
            header.setAttribute("class", "header bg-warning w-100 h-100")
            this.header = header
        },
        content: function(){
            const content = this.header.appendChild(document.createElement("section"));
            content.setAttribute("class", "");
        }
    }
    elements.newHeader()
    elements.content()
}