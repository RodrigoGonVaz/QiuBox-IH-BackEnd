//1. Import
const express           =require("express")
const router            =express.Router()

const qiuboxController  =require("./../controllers/qiubox.Controller")




//2. Ruteo (Router)
//Crear Artesania
router.post("/crear", qiuboxController.create)

// LEER Artesanias
router.get("/leer", qiuboxController.readAll)

//Leer una Artesania 
router.get("/leeruna/:id", qiuboxController.readOne)

//Actualizar Artesania
router.put("/editar/:id", qiuboxController.edit)

//Delete Artesania
router.delete("/borrar/:id", qiuboxController.delete)


//Exportaciones
module.exports = router
