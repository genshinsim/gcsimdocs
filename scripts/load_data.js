var Papa = require("papaparse");
var fs = require("fs");

var fields = Papa.parse(fs.readFileSync("./data/fields.csv").toString());
let fieldsJson = {};
fields.data.forEach((e, i) => {
  if (i == 0) {
    return; //skip first row
  }
  if (!(e[0] in fieldsJson)) {
    fieldsJson[e[0]] = [];
  }
  //split fields
  const f = e[1].split(" | ");
  fieldsJson[e[0]].push({
    fields: f,
    desc: e[2],
  });
});
fs.writeFileSync(
  "./src/components/Fields/data.json",
  JSON.stringify(fieldsJson, null, 2)
);
console.log("Done loading fields");

var frames = Papa.parse(fs.readFileSync("./data/frames.csv").toString());
let framesJson = {};
frames.data.forEach((e, i) => {
  if (i == 0) {
    return; //skip first row
  }
  if (!(e[0] in framesJson)) {
    framesJson[e[0]] = [];
  }
  //split fields
  framesJson[e[0]].push({
    vid_credit: e[1],
    count_credit: e[2],
    vid: e[3],
    count: e[4],
  });
});
fs.writeFileSync(
  "./src/components/Frames/data.json",
  JSON.stringify(framesJson, null, 2)
);
console.log("Done loading frames");
