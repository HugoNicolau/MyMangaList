import { Router } from "express";
import { deleteManga, getMangas, getOneManga, postManga, updateManga } from "../controllers/mangasControllers.js";


const mangasRouter = Router();


    mangasRouter.post("/mangas", postManga);
    mangasRouter.get("/mangas",getMangas);
    mangasRouter.get("/mangas/:id",getOneManga);
    mangasRouter.patch("/manga/:id", updateManga)
    mangasRouter.delete("/mangas/:id", deleteManga);



export { mangasRouter };