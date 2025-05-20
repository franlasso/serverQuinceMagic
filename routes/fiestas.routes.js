import express from "express"
import menuController from "../controllers/menu.controllers.js"
import decoracionController from "../controllers/decoracion.controllers.js"
import salonController from "../controllers/salon.controllers.js"
import calculoController from "../controllers/calculo.js"

const router = express.Router()

router.post("/calculo",calculoController)

router.get("/menu",menuController.leerMenu)
router.get("/menu/id/:id", menuController.consultarMenubyId)
router.post("/menu", menuController.createMenu)
router.put("/menu/id/:id",menuController.modificarMenuById)
router.delete("/menu/id/:id",menuController.eliminarMenuById)

router.get("/decoracion",decoracionController.leerDecoracion)
router.get("/decoracion/id/:id", decoracionController.consultarDecoracionbyId)
router.post("/decoracion", decoracionController.createDecoracion)
router.put("/decoracion/id/:id",decoracionController.modificarDecoracionById)
router.delete("/decoracion/id/:id",decoracionController.eliminarDecoracionById)

router.get("/salon",salonController.leerSalon)
router.get("/salon/id/:id", salonController.consultarSalonbyId)
router.post("/salon", salonController.createSalon)
router.put("salon/id/:id",salonController.modificarSalonById)
router.delete("salon/id/:id",salonController.eliminarSalonById)

export default router