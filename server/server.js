let minihub = require('minihub');

minihub.listen(3001, () => {
  console.log("Minihub is launch on port: http://localhost:" + 3001);
});