const githubLabelSync = require('github-label-sync');

githubLabelSync({
  accessToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  repo: 'movester/movester_client_product',
  labels: [],
  dryRun: true,
}).then(diff => {
  console.log(diff);
});