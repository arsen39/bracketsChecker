"use strict";

function bracketCheker(str) {
  const openArr = ["(", "{", "[", "<"];
  const closeArr = [")", "}", "]", ">"];
  const strArr = str.split("");

  const suspectsArr = [];
  strArr.forEach((item, numb) => {
    if (openArr.includes(item) && closeArr.includes(strArr[numb + 1])) {
      suspectsArr.push([item, strArr[numb + 1]]);
    }
  });
  const suspectsAnalysis = suspectsArr.map((item) => {
    const openIndex = openArr.indexOf(item[0]);
    const closeIndex = closeArr.indexOf(item[1]);
    return openIndex === closeIndex;
  });
  if (suspectsAnalysis.includes(false)) {
    return false;
  }
  
  const amountAnalysis = openArr.map((item, numb) => {
    let openCounter = 0;
    let closeCounter = 0;

    strArr.forEach ((strItem) => {
      if (item === strItem) {
        openCounter++;
      }
    })
    strArr.forEach ((strItem) => {
      if (closeArr[numb] === strItem) {
        closeCounter++;
      }
    })

    return (openCounter === closeCounter)
  })
  
  return !amountAnalysis.includes(false);
}
