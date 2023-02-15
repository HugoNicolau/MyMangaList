import { Router } from "express";
import { deleteManga, getMangas, getOneManga, postManga, updateManga } from "../controllers/mangasControllers.js";


const mangasRouter = Router();


    mangasRouter.post("/mangas", postManga);
    mangasRouter.get("/mangas",getMangas);
    mangasRouter.get("/mangas/:name",getOneManga);
    mangasRouter.patch("/manga/", updateManga)
    mangasRouter.delete("/mangas/:id", deleteManga);



export { mangasRouter };