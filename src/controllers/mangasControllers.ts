import httpStatus from "http-status";
import { Request, Response } from "express";
import { postingManga } from "../repositories/mangasRepositories";


export async function postManga(req:Request, res:Response){
    const manga = req.body
    try{
        const posted = await postingManga(manga);
        return res.status(httpStatus.OK).send(posted);

    }   catch(err){
        return res.status(httpStatus.BAD_REQUEST);
    }
}

export async function getMangas(req:Request, res:Response){
    try{

    }   catch(err){
        
    }
}
export async function getOneManga(req:Request, res:Response){
    try{

    }   catch(err){
        
    }
}

export async function updateManga(req:Request, res:Response){
    try{

    }   catch(err){
        
    }
}

export async function deleteManga(req:Request, res:Response){
    try{

    }   catch(err){
        
    }
}