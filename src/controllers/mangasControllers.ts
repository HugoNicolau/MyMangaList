import httpStatus from "http-status";
import { Request, Response } from "express";
import { postingManga, getAllMangas, updateOneManga, deleteOneManga} from "../repositories/mangasRepositories.js";
import { Manga } from "../types/types.js";



export async function postManga(req:Request, res:Response){
    const manga:Manga = req.body
    try{
        const posted = await postingManga(manga);
        return res.status(httpStatus.OK).send(posted);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}

export async function getMangas(req:Request, res:Response){
    try{
        const mangas = await getAllMangas();
        return res.status(httpStatus.OK).send(mangas);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}
export async function getOneManga(req:Request, res:Response){
    const { name } = req.body
    try{
        const manga = await postingManga(name);
        return res.status(httpStatus.OK).send(manga);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}

export async function updateManga(req:Request, res:Response){
    const manga = req.body
    try{
        const newManga = await updateOneManga(manga);
        return res.status(httpStatus.OK).send(newManga);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}

export async function deleteManga(req:Request, res:Response){
    const manga = req.body
    try{
        const deleted = await deleteOneManga(manga);
        return res.status(httpStatus.OK).send(deleted);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}