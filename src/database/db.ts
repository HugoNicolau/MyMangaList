import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;

// export const connectionDB = new Pool({
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'root',
//     database: 'my_manga_list'
//   });

export const connectionDB = new Pool( {
    host: process.env.DATABASE_URL,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME

    // ssl: true
});