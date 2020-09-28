import { removeSync, moveSync, writeJSONSync } from 'fs-extra';
import { join } from 'path';
import * as Editor from 'editor';

export function onBeforeComplete(options, result) {
    const pkgOptions = options.packages.wechatgame;
    if (!pkgOptions.separateEngine || !options.packages['wechatgame-Plugin'].publish) {
        return;
    }
    // 将项目内除了 cocos 文件夹复制到 mini-game 文件夹内
    const miniGameDir = join(__dirname, '../../cocosPlugin/minigame');
    copySync(result.dest, miniGameDir);
    removeSync(join(result.dest, 'cocos3d-js'));

    // 修改 game.json 内的 cocos 字段
    const gameJsonPath = join(result.paths.dir, 'game.json');
    const gameJson = readJsonSync(gameJsonPath);
    gameJson.cocos = {
        version: 'dev',
        provider: 'wx0446ba2621dda60a',
    };
    writeJSONSync(gameJsonPath, gameJson);

    const dir = join(Editor.App.path, '../resources/3d/engine/bin/.cache/editor-cache/wechatgame/cocos');
    // 将打包出来的引擎移动到 plugin 内部
    moveSync(dir, join(__dirname, '../../cocosPlugin/plugin'));

}
