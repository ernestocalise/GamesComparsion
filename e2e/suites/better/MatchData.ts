import { App } from "../../utils/app";
import { Utility } from "../../utils/Utility";
import * as fs from 'fs';
import { PATH } from "../../models/paths";
import { SELECTORS } from "../../models/selectors";
export async function MatchData(app: App) {
  Utility.Init();
  const snaiText = fs.readFileSync(PATH.BETTER_PATH + SELECTORS.FILENAMES.SNAI_DATA, 'utf8');
  const betterText = fs.readFileSync(PATH.BETTER_PATH + SELECTORS.FILENAMES.BETTER_DATA, 'utf8');
  const snaiData = JSON.parse(snaiText);
  const betterData = JSON.parse(betterText);
  await app.start();
  await app.page.waitForTimeout(4000);
  const arrMatch = [];
  const allMatch = [];
  snaiData.forEach(singleSnaiGame => {
    betterData.filter((singleBetterGame) => {
      if (singleBetterGame.Casa === singleSnaiGame.Casa || singleBetterGame.Trasferta === singleSnaiGame.Trasferta) {
        try {
          if (parseInt(singleSnaiGame.Under, 10) >= 2 && parseInt(singleBetterGame.Over) >= 2) {
            arrMatch.push({
              snaiData: singleSnaiGame,
              betterData: singleBetterGame
            });
          }
          else if (parseInt(singleSnaiGame.Over, 10) > 2 && parseInt(singleBetterGame.Under) > 2) {
            arrMatch.push({
              snaiData: singleSnaiGame,
              betterData: singleBetterGame
            });
          }
          allMatch.push({
            snaiData: singleSnaiGame,
            betterData: singleBetterGame
          });
        } catch (ex) {
          console.warn(ex);
        }

      }
    });
  });
  await app.page.waitForTimeout(10000);
  fs.writeFileSync(PATH.BETTER_PATH + SELECTORS.FILENAMES.WIN_MATCH, JSON.stringify(arrMatch), {
    encoding: 'utf8',
    flag: 'w'
  })
  fs.writeFileSync(PATH.BETTER_PATH + SELECTORS.FILENAMES.ALL_MATCH, JSON.stringify(allMatch), {
    encoding: 'utf8',
    flag: 'w'
  })
  await app.page.waitForTimeout(10000);
}
