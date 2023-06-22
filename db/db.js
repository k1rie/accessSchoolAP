import { createPool } from "mysql2/promise";

const connection = createPool({
    host:"ba6pgizhgrsqppr3jwxe-mysql.services.clever-cloud.com",
    user:"ugpdhtfemgyyrhw3",
    password:"vIpA4dfisvL53WeC6LF9",
    port:3306,
    database:"ba6pgizhgrsqppr3jwxe"
})

export default connection