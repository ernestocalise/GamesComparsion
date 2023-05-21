import { GetdataFromBetter } from "../../suites/better/GetdatafromBetter";
import { App } from "../../utils/app";
it("Get Data From Better", async () => {
try {
  const app = new App();
  await GetdataFromBetter(app);
}catch (ex){
  console.log(ex)
}
});
