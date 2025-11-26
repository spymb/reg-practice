var emptyStr = "";
var reg = /^$/;
reg.test(emptyStr); // true

var str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;
str.match(/^\d/gm); // 1, 2, 3
