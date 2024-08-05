import {Pool} from 'pg'

const pool = new Pool({
    user: 'mujibai',
    host: 'localhost',
    database: 'bookDB',
    password: 'baigan',
    port: 5432
})

export default pool