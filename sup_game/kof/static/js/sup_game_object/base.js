let SUP_GAME_OBJECTS = [];

class SupGameObject {
    constructor() {
        SUP_GAME_OBJECTS.push(this);  // 把该对象加入

        this.timedelta = 0;
        this.has_call_start = false;  // 用于判断是否初始执行
    }

    start() {  // 初始执行一次

    }

    update() {  // 每一帧执行一次(除了第一帧)

    }

    destroy() {  // 删除当前对象
        for (let i in SUP_GAME_OBJECTS) {
            if (SUP_GAME_OBJECTS[i] === this) {
                SUP_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;  // 记录上一次执行的时间

let SUP_GAME_OBJECTS_FRAME = (timestamp) => {
    for (let obj of SUP_GAME_OBJECTS) {
        if (!obj.has_call_start) {  // 未初始执行
            obj.start();
            obj.has_call_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(SUP_GAME_OBJECTS_FRAME);
}

requestAnimationFrame(SUP_GAME_OBJECTS_FRAME);

export {
    SupGameObject,
}