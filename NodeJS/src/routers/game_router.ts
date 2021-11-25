import express, { Router } from "express"
import GameDB from "../dbs/db_games";
import UserDB from "../dbs/db_users";

export function createGameRouter(db_games: GameDB, db_users: UserDB): Router {
    let router: Router = Router();
    router.use(express.json());
    router.get("/games", function (request, response) {
        response.json(db_games.getAll());
    });
    router.get("/games/:id", function (request, response) {
        const id = parseInt(request.params.id);
        const game = db_games.get(id);
        if (game) {
          response.json(game);
        } else {
          response.status(404);
          response.send();
        }
    });
    router.post("/games", function (request, response) {
        let game = request.body;
        const id = db_games.create(game);
        response.json({ id: id });
    });
    router.put("/games/:id", function (request, response) {
        const id = parseInt(request.params.id);
        const game = request.body;
        db_games.update({ id: id,
							   title: game.title,
							   description: game.description,
							   images: game.images,
							   ageRating: game.ageRating
							});
        response.send();
    });
    router.delete("/games/:id", function (request, response) {
        const id = parseInt(request.params.id);
        db_games.delete(id);
        db_users.deleteGame(id);
        response.send();
    });
    return router;
}

export default createGameRouter;