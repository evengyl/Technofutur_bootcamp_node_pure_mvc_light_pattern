import fs from 'fs'
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const getNavbar = () => {

    //injecter la navigation 
    return fs.readFileSync(path.join(__dirname, "../views/fragments/nav.view.html")).toString()

}


export const getFooter = () => {
    return fs.readFileSync(path.join(__dirname, "../views/fragments/footer.view.html")).toString()
}