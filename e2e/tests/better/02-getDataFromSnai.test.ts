import { getDataFromSnai } from "../../suites/better/GetDataFromSnai";
import { App } from "../../utils/app";
it("Get Data From Snai", async () => {
try {
  const app = new App();
  await getDataFromSnai(app);
}catch (ex){
  console.log(ex)
}
});
