"Gogogo now!".match(/(go)+/gi); // ['Gogogo']

// matchAll
let results = "<h1> <h2>".matchAll(/<(.*?)>/gi);
for (let result of results) {
  alert(result);
  // 第一个 alert：<h1>,h1
  // 第二个：<h2>,h2
}

// 替换
let str = "John Bull";
let regexp = /(\w+) (\w+)/;
str.replace(regexp, "$2, $1"); // 'Bull John'
