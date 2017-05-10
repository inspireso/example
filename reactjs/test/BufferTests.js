const {readFile} = require('fs');
const file = "C:/Users/lanxe/dev/java/workspace/sunisco/weixin.trunk/weixin-ui/build/assets/templates/mp.html";
readFile(file, function (err, data) {
  if (err) return callback(err);
  console.log(data.toString('utf8'));
});



