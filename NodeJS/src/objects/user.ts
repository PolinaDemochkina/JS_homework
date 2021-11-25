import { GameRecord } from "./game_record";

export class User {
  id: number | null;
  name: string;
  gameRecords: GameRecord[];
}