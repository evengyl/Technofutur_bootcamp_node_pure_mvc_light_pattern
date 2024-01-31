import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const homeController = (req, res) => {

    let template = fs.readFileSync(path.join(__dirname, "../views/home.view.html"))
    
    
    res.statusCode = 200
    res.write(template)
}