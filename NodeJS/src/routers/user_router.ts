import express, { Router } from "express"
import GameDB from "../dbs/db_games";
import UserDB from "../dbs/db_users";

export function createUserRouter(db_games: GameDB, db_users: UserDB): Router {
    let router: Router = Router();
    router.use(express.json());
	
    router.get("/users/:id", function (request, response) {
        const id = parseInt(request.params.id);
        const user = db_users.get(id);
        if (user) {
          response.json({ id: user?.id,
                          name: user?.name
                        });
        } else {
          response.status(404);
          response.send();
        }
    });
	
    router.post("/users", function (request, response) {
        const name: string = request.body.name;
        const id = db_users.add({ id: -1,
                                           name: name,
                                           gameRecords: [] });
        response.json({ id: id });
    });
	
    router.put("/users/:id", function (request, response) {
        const id = parseInt(request.params.id);
        const name: string = request.body.name;
        const user = db_users.get(id);
        if (user) {
            db_users.update({ id: id,
                                       name: name,
                                       gameRecords: user.gameRecords
                                     });
        }
        response.send();
    });
	
    router.delete("/users/:id", function (request, response) {
        const id = parseInt(request.params.id);
        db_users.delete(id);
        response.send();
    });
	
	router.get("users/:id/games", function (request, response) {
	const id = parseInt(request.params.id);
	const user = db_users.get(id);
	if (user) {
	  response.json({
		games: user.gameRecords
		  .filter((gameRecords) => !gameRecords.hidden)
		  .map((gameRecords) => ({ game: db_games.get(gameRecords.gameId), playTimeInMinutes: gameRecords.playTimeInMinutes })),
	  });
	} else {
	  response.status(404);
	  response.send();
	}
	});
	
	router.post("users/:id/games", function (request, response) {
	const id = parseInt(request.params.id);
	const data = request.body;
	const user = db_users.get(id);
	if (user) {
	  const gameRecords = user.gameRecords.find((gameRecords) => gameRecords.gameId == data.gameId);
	  if (gameRecords) {
		gameRecords.hidden = false;
	  } else {
		user.gameRecords = [...user.gameRecords, { ...data, playTimeInMinutes: 0, hidden: false }];
	  }
	  db_users.update(user);
	} else {
	  response.status(404);
	  response.send();
	}
	});

	router.post("users/:id/games/:gameId", function (request, response) {
	const id = parseInt(request.params.id);
	const gameId = parseInt(request.params.gameId);
	const data = request.body;
	const user = db_users.get(id);
	if (user) {
	  user.gameRecords = user.gameRecords.map((gameRecords) =>
		gameRecords.gameId == gameId ? { ...gameRecords, playTimeInMinutes: gameRecords.playTimeInMinutes + data.playTimeInMinutes } : gameRecords
	  );
	  db_users.update(user);
	} else {
	  response.status(404);
	  response.send();
	}
	});
	
	router.delete("users/:id/games/:gameId", function (request, response) {
	const id = parseInt(request.params.id);
	const gameId = parseInt(request.params.gameId);
	const user = db_users.get(id);
	if (user) {
	  user.gameRecords = user.gameRecords.map((gameRecords) => (gameRecords.gameId == gameId ? { ...gameRecords, hidden: true } : gameRecords));
	  db_users.update(user);
	} else {
	  response.status(404);
	  response.send();
	}
	});
    return router;
}

export default createUserRouter;