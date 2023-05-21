import { MatchData } from "../../suites/better/MatchData";
import { App } from "../../utils/app";
it("Match data creating the Json with winning matches and crossed data", async () => {
try {
  const app = new App();
  await MatchData(app);
}catch (ex){
  console.log(ex)
}
});
