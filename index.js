/* Commande pour initialiser un projet node -> npm init
ne pas oublier de créer le fichier index.js*/

/*Par défaut, node , utilise le système de fichier et d'import, CommonJS */
/* pour utiliser les nouveautés en terme de nommage, on va passer le tout en mode Module */
/* Pour ce faire on se rend dans le package.json et on ajoute "type" : "module" */

/* Pour installer un hot reloader, on utiliser nodemon de manière global 
npm i -g nodemon */


import http from 'http'
import {router} from './routers/router.js'

const server = http.createServer((req, res) => {
    
    res.setHeader("Content-Type", "text/html; charset=utf-8")

    router(req, res)
})

let port = 3001
server.listen(port, console.log(`Le serveur écoute sur le port ${port}`))