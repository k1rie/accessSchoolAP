import connection from "../db/db.js"

export var giveAccess = async (req,res)=>{
try {
    const [rows] = await connection.query('SELECT * FROM alumnos WHERE id = ? AND inSchool = false AND token = ?',[req.params.id,req.params.token])
    if(rows[0].token === req.params.token){
        connection.query('UPDATE alumnos SET inSchool = true WHERE id = ?',[req.params.id])
        console.log()
        res.send('Hola')
     }
} catch (error) {
    res.send(error)
}

}

export var quitAccess = async(req,res)=>{
    try {
        const [rows] = await connection.query('SELECT * FROM alumnos WHERE id = ? AND token = ?',[req.params.id,req.params.token])
        if(rows[0].inSchool === 1){
        connection.query('UPDATE alumnos SET inSchool = false WHERE id = ?',[req.params.id])
        console.log('estoy en la escuela')
        }
        res.send({status: 'Ok'})
    } catch (error) {
        res.send(error)
    }
}

export var getAllAlumnos = async(req,res)=>{
    try {
        const [rows] = await connection.query('SELECT * FROM alumnos')
        console.log(rows)
        res.send({status: 'Ok', alumnos: rows})
    } catch (error) {
        res.send(error)
    }
}
//    const result = await connection.query('UPDATE alumnos SET inSchool = true WHERE id = ?',[req.params.id])
