import {config} from "dotenv"
config();

export default {
    port: process.env.PUERTO || 3000,
    dbUser: process.env.DBUSER || '',
    dbPassword: process.env.DBPASS || '',
    dbServer: process.env.DBSERVER || '',
    dbDataBase: process.env.DBDATABASE || ''
}