import { Player } from "./base.js";
import { GIF } from "../utils/gif.js";

export class Kyo extends Player {
    constructor(root, info) {
        super(root, info);

        this.init_animations();
    }

    init_animations() {
        let outer = this;
        let offset = [0, -22, -22, -140, 0, 0, 0];
        for (let i = 0; i < 7; i++) {
            let gif = GIF();
            gif.load(`../../static/images/player/kyo/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,  // 总图画书
                frame_rate: 5,  // 刷新速率 每5帧刷新一次
                offset_y: offset[i],  // 偏移量 因为每张图片的高度不一样 需要调整成使任务在同一高度
                loaded: false,  // 判断是否被渲染出来
                scale: 2,  // 缩放
            });

            gif.onload = function () {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if (i === 3) {
                    obj.frame_rate = 4;
                }
            }
        }
    }
}