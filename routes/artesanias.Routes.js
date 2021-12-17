//1. Import
const express           =require("express")
const router            =express.Router()

const arteController  =require("./../controllers/arte.Controller")




//2. Ruteo (Router)
//Crear Artesania
router.post("/crear", arteController.create)

// LEER Artesanias
router.get("/leer", arteController.readAll)

//Leer una Artesania 
router.get("/leeruna/:id", arteController.readOne)

//Actualizar Artesania
router.put("/editar/:id", arteController.edit)

//Delete Artesania
router.delete("/borrar/:id", arteController.delete)


//Exportaciones
module.exports = router
