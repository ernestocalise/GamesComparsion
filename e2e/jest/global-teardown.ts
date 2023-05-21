import CONFIG from './../environment/env.config';
import { rmdirSync } from 'fs';

module.exports = async () => {
  console.log('Executing teardown task...');
  // In local maybe we dont wanna to remove the session after each test
  // In Jenkins doesnt matter since the next build are not gonna use that value
  if (!CONFIG.E2E_PRESERVE_SESSIONS && !CONFIG.E2E_ARE_RUNNING_ON_JENKINS) {
  }

  try {
    rmdirSync('temp', { recursive: true });
  } catch (e) {
    /*
      There is no reason to do anything here because the main error is that
      the folder temp does not exist. And we aready expect to delete it
      so if the folder does not exist is perfect. But we do this try/catch
      because we won't to break the proccess execution.
    */
  }
};
