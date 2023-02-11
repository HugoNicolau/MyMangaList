import express, {Response, Request} from 'express';
import { mangasRouter } from './routes/mangasRouter.js';
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;
//process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"

app.get("/health", (req: Request, res: Response) => {
    res.send("Ok");
});
app.use(mangasRouter);


app.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
});
