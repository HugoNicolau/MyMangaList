import { connectionDB } from "../database/db.js";
import { Manga } from "../types/types.js";

export async function postingManga(manga:Manga){
    const { name, image, description, chapters, score } = manga
    return await connectionDB.query('INSERT INTO mangas (name, image, description, chapters, score) VALUES ($1, $2, $3, $4, $5);', [name, image, description, chapters, score]); 
}

export async function getAllMangas(){
    return await connectionDB.query('SELECT * FROM mangas')
}

export async function getOnlyOneManga(name: string){
    return await connectionDB.query('SELECT * FROM mangas WHERE name=$1',[name]);
}

export async function updateOneManga(manga: Manga){
    const {id, name, image, description, chapters, score } = manga
    return await connectionDB.query('UPDATE mangas SET name=$1, image=$2, description=$3, chapters=$4, score=$5 WHERE id=$6',[name, image, description, chapters, score, id])
}

export async function deleteOneManga(id:string){
    return await connectionDB.query('DELETE FROM mangas WHERE id=$1',[id]);
}