import { createPool } from "mysql2/promise";

const connection = createPool({
    host:process.env.DB_HOST || "127.0.0.1" ,
    user:process.env.DB_USER || "local",
    password: process.env.DB_PASSWORD || "Golem100@",
    port:3306,
    database:process.env.DB_DBNAME || "access"
})

export default connection