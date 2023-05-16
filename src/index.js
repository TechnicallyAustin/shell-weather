import "bootstrap";
import "jquery";
import "popper.js";
import "../src/css/style.css";
import { createPage } from "./page/createPage";
import { weatherController } from "./weather/controller";
import { mainContent } from "./page/content/mainContent";

document.addEventListener("DOMContentLoaded", () => {
    createPage()
    mainContent()
});
