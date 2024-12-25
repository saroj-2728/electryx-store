import { Request, Response } from "express";
import app from './app.js'

app.get('/', (req: Request, res: Response) => {
    res.send('Get at /');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running!!`);
});