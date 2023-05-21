### Why that empty folder?
Jenkins needs always a /reports folder, but sometimes if no E2E executed (or all the test are skipped) we are not generating any
report (and, there folder, no creating the folder). In that cases we always need an empty folder.