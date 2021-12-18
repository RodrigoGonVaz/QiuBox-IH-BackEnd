//1. Import
const express           =require("express")
const router            =express.Router()

const userController  =require("./../controllers/user.Controller")
const authorization   =require("./../middlewares/authorization")


// 2. ROUTER
// CREAR USUARIO
router.post("/crear", userController.create)

// INICIAR SESIÓN DE USUARIO
router.post("/iniciar-sesion", userController.login)


//Verificacion de USUARIO
router.get("/verifytoken", authorization, userController.verifyToken)


// 3. EXPORTACIÓN
module.exports = router