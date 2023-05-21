import { App } from "../../utils/app";
import { Utility } from "../../utils/Utility";
import * as fs from 'fs';
import { PATH } from "../../models/paths";
import { SELECTORS } from "../../models/selectors";
export async function getDataFromSnai(app: App) {
  Utility.Init();
  await app.start();
  await app.accessWeb(SELECTORS.SNAI.SNAI_URL);
  await app.page.waitForTimeout(10000);
  await app.page.waitForSelector(SELECTORS.SNAI.SIDEBAR.CALCIO);
  await app.page.click(SELECTORS.SNAI.SIDEBAR.CALCIO);
  await app.page.waitForSelector(SELECTORS.SNAI.SIDEBAR.PRIMO_PIANO);
  await app.page.click(SELECTORS.SNAI.SIDEBAR.PRIMO_PIANO);
  await app.page.waitForSelector(SELECTORS.SNAI.SIDEBAR.OGGI);
  await app.page.click(SELECTORS.SNAI.SIDEBAR.OGGI);
  await app.page.waitForTimeout(10000);
  const gameName = await Utility.Selector.getText(app.page, SELECTORS.SNAI.GAMENAME);
  await app.page.waitForTimeout(1000);
  const arrGames = [];
  for(let i = 0; i<gameName.length; i++ ){
  let data = gameName[i];
    try {
        let under = await Utility.XPath.getText(app.page, SELECTORS.SNAI.GAME_UNDER.replace(SELECTORS.SNAI.GAME_NAME_LITERAR, data));
        await app.page.waitForTimeout(100);
        let over = await Utility.XPath.getText(app.page, SELECTORS.SNAI.GAME_OVER.replace(SELECTORS.SNAI.GAME_NAME_LITERAR, data));
        await app.page.waitForTimeout(100);
        arrGames.push(
          {Casa: data.split(' - ')[0],Trasferta: data.split(' - ')[1], Under: under.toString(), Over: over.toString()}
          );
        } catch {

      }
  }
  await app.page.waitForTimeout(4000);
  fs.writeFileSync(PATH.BETTER_PATH + SELECTORS.FILENAMES.SNAI_DATA, JSON.stringify(arrGames), {
    encoding: 'utf8',
    flag: 'w'
  });
  await app.page.waitForTimeout(10000);
}
