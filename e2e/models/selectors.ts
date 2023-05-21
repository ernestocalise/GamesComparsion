
export const SELECTORS = {
  SNAI: {
    SNAI_URL: 'http://www.snai.it/sport',
    SIDEBAR: {
      CALCIO: '#heading_0 > a',
      PRIMO_PIANO: '#CALCIO_0 > div > div > div:nth-child(1) > a',
      OGGI: '#CALCIO_PRIMOPIANO_0 > div > span:nth-child(6) > span > a',
    },
    GAMENAME: 'div > div > div > div.nopaddingLeftRight.matchDescriptionFirstCol.footballWidthFirstCol > span.descriptionTextBlue > a',
    GAME_UNDER: `//a[contains(text(), 'GAME___NAME')]/../../../div[5]/div/div[contains(@class, 'oddsUnderOver')]/span`,
    GAME_OVER: `//a[contains(text(), 'GAME___NAME')]/../../../div[4]/div/div[contains(@class, 'oddsUnderOver')]/span`,
    GAME_NAME_LITERAR: 'GAME___NAME'
  },
  BETTER: {
    BETTER_URL: 'https://www.lottomatica.it/scommesse/avvenimenti',
    GAME_NAME: '.event-name',
    GAME_UNDER: `//div[contains(text(), 'GAME___NAME')]/../../../div[3]//div[contains(text(), 'under 2.5')]/../div[@class="selection-price"]/span`,
    GAME_OVER: `//div[contains(text(), 'GAME___NAME')]/../../../div[3]//div[contains(text(), 'over 2.5')]/../div[@class="selection-price"]/span`,
    GAME_NAME_LITERAL: 'GAME___NAME'
  },
  FILENAMES: {
    SNAI_DATA: 'snai-data.json',
    BETTER_DATA: 'better-data.json',
    WIN_MATCH: 'WinningMatchData.json',
    ALL_MATCH: 'matchData.json'
  }
};
