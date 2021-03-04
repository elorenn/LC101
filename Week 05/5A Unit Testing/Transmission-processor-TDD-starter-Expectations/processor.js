// 14.5.2.2. Go Green:

function processor(transmission) {
  if ((transmission.indexOf("::") < 0) || (transmission.indexOf("::") !== transmission.lastIndexOf("::"))) {
    return -1;
  }
  let tranArr = transmission.trim().split("::");
  let id = Number(tranArr[0]);
  if (Number.isNaN(id)) {
    id = -1;
  }
  let rawData = tranArr[1].trim();
  if ((rawData[0] !== "<") || (rawData[rawData.length - 1] !== ">") || (rawData.slice(1, rawData.length - 1).includes('>')) || (rawData.slice(1, rawData.length - 1).includes('<'))) {
    rawData = -1;
  } else {
    rawData = Number(rawData.slice(1, rawData.length - 1));
  }
  if (Number.isNaN(rawData)) {
    rawData = -1;
  }
  return {
    id: id,
    rawData: rawData
  };
}

module.exports = processor;

