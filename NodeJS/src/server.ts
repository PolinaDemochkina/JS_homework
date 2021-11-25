import express from "express";
import createGameRouter from "./routers/game_router";
import createUserRouter from "./routers/user_router";
import createFileRouter from "./routers/static_file_router";
import GameDB from "./dbs/db_games";
import UserDB from  "./dbs/db_users";

const port: Number = 5555;
const app = express();

const gameBD = new GameDB();
const userDB = new UserDB();

app.use(createGameRouter(gameBD, userDB));
app.use(createUserRouter(gameBD, userDB));
app.use(createFileRouter());

app.listen(port, () => {
  console.log(`Express started on port ${ port }.`);
});