import { title } from "process";
import { idText } from "typescript";
import { Game } from "../objects/game";

let games: Game[] = [
    {
        id: 1,
        title: "Mirror's Edge",
        description: "In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, & you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.",
        images: [
            "Video-Game-Controller-Icon-IDV-green.svg1.jpg",
            "Video-Game-Controller-Icon-IDV-green.svg2.jpg",
        ],
        ageRating: "T"
    },
    {
        id: 2,
        title: "Deus Ex: Game of the Year Edition",
        description: "The year is 2052 and the world is a dangerous and chaotic place. Terrorists operate openly - killing thousands; drugs, disease and pollution kill even more. The world's economies are close to collapse and the gap between the insanely wealthy and the desperately poor grows ever wider.",
        images: [
            "Video-Game-Controller-Icon-IDV-green.svg3.jpg",
            "Video-Game-Controller-Icon-IDV-green.svg4.jpg",
        ],
        ageRating: "M"
    },
    {
        id: 3,
        title: "Titanfall 2",
        description: "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force.",
        images: [
            "Video-Game-Controller-Icon-IDV-green.svg5.jpg",
            "Video-Game-Controller-Icon-IDV-green.svg6.jpg",
        ],
        ageRating: "M"
    },
    {
        id: 4,
        title: "FINAL FANTASY XIV Online",
        description: "Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
        images: [
            "Video-Game-Controller-Icon-IDV-green.svg7.jpg",
        ],
        ageRating: "T"
    },
];

let gamesCount = games.length + 1;
export default class GameDB {
  getAll = () => {
    return games;
  };

  get = (id: number) => {
    const game = games.find((game) => game.id == id);
    return game ?? null;
  };

  create = (game: Game) => {
    game.id = gamesCount++;
    games = [...games, game];
  };

  update = (game: Game) => {
    const id = game.id;
    games = [...games.filter((game) => game.id != id), game];
  };

  delete = (id: number) => {
    games = games.filter((game) => game.id != id);
  };
}