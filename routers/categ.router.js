import { categController } from "../controllers/categ.controller.js"


export const categRouter = (req, res) => {
    if(req.method == "GET")
    {
        categController(req, res)
    }
    else if(req.method == "POST")
    {

    }
    else if(req.method == "PATH")
    {

    }
    else if(req.method == "DELETE")
    {

    }
}