import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const categController = (req, res) => {
   
    let template = fs.readFileSync(path.join(__dirname, "../views/categ.view.html"))

    let content = ""
    let result = JSON.parse(fs.readFileSync(path.join(__dirname, "../models/categ.model.js")))
    content += "<ul>"
    result.forEach((each) => {
        content += `
            <li>${each.name}</li>
        `
    })
    content += "</ul>"

    template += content
    
    res.statusCode = 200
    res.write(template)
}