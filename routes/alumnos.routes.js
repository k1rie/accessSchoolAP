import { Router } from "express";
import {giveAccess,quitAccess,getAllAlumnos} from "../controllers/alumnos.controllers.js"

const router = Router()

router.post('/giveaccess/:id/:token',giveAccess)

router.post('/quitaccess/:id/:token',quitAccess)

router.get('/getallalumnos',getAllAlumnos)

export default router