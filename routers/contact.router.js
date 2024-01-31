import { contactController, contactStorePostController } from "../controllers/contact.controller.js"

export const contactRouter = (req, res) => {
    if(req.method == "GET")
    {
        contactController(req, res)
    }
    else if(req.method == "POST")
    {
        contactStorePostController(req, res)
    }
    else if(req.method == "PATH")
    {

    }
    else if(req.method == "DELETE")
    {

    }
}