import { moveSync, writeJSONSync } from 'fs-extra';
import { join } from 'path';

export function onBeforeComplete(options, result) {
    if (!options.separateEngine) {
        return;
    }
    // 修改 game.json 内的 cocos 字段
    const gameJsonPath = join(result.paths.dir, 'game.json');
    const gameJson = readJsonSync(gameJsonPath);
    gameJson.cocos = {
        version: 'dev',
        provider: 'wx0446ba2621dda60a',
    };
    writeJSONSync(gameJsonPath, gameJson);
    // 将打包出来的引擎移动到 plugin 内部
    moveSync(result.paths.engine, join(__dirname, '../../cocosPlugin/plugin'));
}
