import { connectionDB } from "../database/db.js";

export async function postingManga(manga){
    const { name, image, description, chapters, score } = manga
    return await connectionDB.query('INSERT INTO mangas (name, image, description, chapters, score) VALUES ($1, $2, $3, $4, $5);', [name, image, description, chapters, score]); 
}