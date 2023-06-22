import { createPool } from "mysql2/promise";

const connection = createPool({
    host:"127.0.0.1" || process.env.DB_HOST,
    user:"local" || process.env.DB_USER,
    password:"Golem100@" || process.env.DB_PASSWORD,
    port:3306 || process.env.DB_PORT,
    database:"access" || process.env.DB_DBNAME
})

export default connection