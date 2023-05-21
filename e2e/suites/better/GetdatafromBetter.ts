import { App } from "../../utils/app";
import { Utility } from "../../utils/Utility";
import * as fs from 'fs';
import { PATH } from "../../models/paths";
import { SELECTORS } from "../../models/selectors";
export async function GetdataFromBetter(app: App) {
  await app.start();
  await app.accessWeb(SELECTORS.BETTER.BETTER_URL);
  await app.page.waitForTimeout(10000);
  let Names;
  Names = await Utility.Selector.getText(app.page, SELECTORS.BETTER.GAME_NAME);
  const BetterGames = [];
  let SingleGameName;
  for (let idx = 0; idx < Names.length; idx++) {
    SingleGameName = Names[idx];
    try {
      const under = await Utility.XPath.getText(app.page, SELECTORS.BETTER.GAME_UNDER.replace(SELECTORS.BETTER.GAME_NAME_LITERAL, SingleGameName.toString().toLowerCase()));
      const over = await Utility.XPath.getText(app.page, SELECTORS.BETTER.GAME_OVER.replace(SELECTORS.BETTER.GAME_NAME_LITERAL, SingleGameName.toString().toLowerCase()));
      await app.page.waitForTimeout(100);
      BetterGames.push(
        { Casa: SingleGameName.split(' - ')[0], Trasferta: SingleGameName.split(' - ')[1], Under: under.toString(), Over: over.toString() }
      );
    } catch {

    }
  }
  await app.page.waitForTimeout(10000);
  fs.writeFileSync(PATH.BETTER_PATH + SELECTORS.FILENAMES.BETTER_DATA, JSON.stringify(BetterGames), {
    encoding: 'utf8',
    flag: 'w'
  });
}
