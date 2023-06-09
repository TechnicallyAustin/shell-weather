import { headerContent } from "./content/headerContent";
import { mainContent } from "./content/mainContent";
import { buildFooter } from "./footer";
import { buildHeader } from "./header";
import { buildMain } from "./main";

export function createPage(){
    const page = document.querySelector("page-content");
    const elements = {
        header: buildHeader(),
        main: buildMain(),
        footer: buildFooter()
    }
    elements.header
    headerContent()
    elements.main
    mainContent()
    elements.footer
};