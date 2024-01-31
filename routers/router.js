import { homeRouter } from "./home.router.js"
import { contactRouter } from "./contact.router.js"
import { categRouter } from "./categ.router.js"
import { getNavbar, getFooter } from "../controllers/controller.js"
import url from 'url'

export const router = (req, res) => {

    //gestion des url pour le routage
    let urlParams = url.parse(req.url, true).pathname.split("/") //[0] => inutile !
    urlParams.shift()

    //if(req.method === "GET" && urlParams[0] === "favicon.ico") res.end()

    res.write(getNavbar())

    if(urlParams[0] == "")
        homeRouter(req, res)

    else if(urlParams[0] == "contact")
        contactRouter(req, res)

    else if(urlParams[0] == "category")
        categRouter(req, res)
    
    else
    {
        res.statusCode = 404
        res.end("<h1>404</h1>")
    }

    res.write(getFooter())


}
