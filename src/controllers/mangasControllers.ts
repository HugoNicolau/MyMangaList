import httpStatus from "http-status";
import { Request, Response } from "express";
import { postingManga, getAllMangas, getOnlyOneManga, updateOneManga, deleteOneManga} from "../repositories/mangasRepositories.js";
import { Manga } from "../types/types.js";



export async function postManga(req:Request, res:Response){
    const manga:Manga = req.body
    try{
        await postingManga(manga);
        return res.sendStatus(httpStatus.OK);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}

export async function getMangas(req:Request, res:Response){
    try{
        const mangas = await getAllMangas();
        return res.status(httpStatus.OK).send(mangas.rows);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}
export async function getOneManga(req:Request, res:Response){
    const name = req.params.name
   
    try{
        const manga = await getOnlyOneManga(name);
        return res.status(httpStatus.OK).send(manga.rows);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}

export async function updateManga(req:Request, res:Response){
    const manga = req.body
    try{
        const newManga = await updateOneManga(manga);
        return res.sendStatus(httpStatus.OK);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}

export async function deleteManga(req:Request, res:Response){
    const id = req.params.id
    try{
        const deleted = await deleteOneManga(id);
        return res.sendStatus(httpStatus.OK);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}