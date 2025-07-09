import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", async (request: Request, response: Response) => {
  response.json({ message: "Hello World! Let`s do it again" });
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
