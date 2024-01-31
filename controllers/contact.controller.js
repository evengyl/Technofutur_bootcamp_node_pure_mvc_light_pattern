import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const contactController = (req, res) => {
    
    let template = fs.readFileSync(path.join(__dirname, "../views/contact.view.html"))
    
    res.statusCode = 200
    res.write(template)
}


export const contactStorePostController = (req, res) => {


    //ici on recois le formulaire de post contact
    let body = ""

    req.on('data', (form) => {
        body += form.toString()
        
    })

    /* Moi je recois ceci du form HTML -> FORMAT : form-data*/ 
    /* nom=zefzef&prenom=zefzef&message=zefzef */

    req.on("end", () => {
        let bodyParsed = JSON.parse('{"' + decodeURI(body).replace(/&/g, '","').replace(/=/g,'":"') +'"}')
        console.log(bodyParsed.nom)
        console.log(bodyParsed.prenom)
        console.log(bodyParsed.message)

    })

    res.statusCode = 303
    res.writeHead(res.statusCode, { 'Location' : "/"})
}