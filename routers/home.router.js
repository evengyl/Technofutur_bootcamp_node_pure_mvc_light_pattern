import { homeController } from "../controllers/home.controller.js"

export const homeRouter = (req, res) => {

    if(req.method == "GET")
    {
        homeController(req, res)
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