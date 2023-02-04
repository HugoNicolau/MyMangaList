import express, {Response, Request} from 'express';


const app = express();

app.get("/health", (req: Request, res: Response) => {
    res.send("Ok");
})

app.listen(5000, () => {
    console.log("Server is running in port 5000")
});
