import Express  from "express";
import cors from 'cors';
import AlumnosRoutes from "./routes/alumnos.routes.js"

const App = Express()

App.use(Express.json())

App.use(cors());

App.use(AlumnosRoutes)

const port = process.env.PORT || 3001;




App.listen('3001',()=>{
    console.log(`servidor escuchando en el puerto ${port}`)
})