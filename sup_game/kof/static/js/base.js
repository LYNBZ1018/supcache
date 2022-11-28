import { GameMap } from "./game_map/base.js";
import { Player } from "./player/base.js";
import { Kyo } from "./player/kyo.js";

class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        this.game_map = new GameMap(this);
        this.players = [
            new Kyo(this, {
                id: 0,
                x: 200,
                y: 0,
                vx: 0,
                vy: 10,
                width: 120,
                height: 200,
                color: 'blue',
            }),
            new Kyo(this, {
                id: 1,
                x: 900,
                y: 0,
                vx: 0,
                vy: 10,
                width: 120,
                height: 200,
                color: 'red',
            }),
        ];

    }



}

export {
    KOF,
}