"Gogogo now!".match(/(go)+/gi); // ['Gogogo']

// matchAll
var results = "<h1> <h2>".matchAll(/<(.*?)>/gi);
for (var result of results) {
  alert(result);
  // 第一个 alert：<h1>,h1
  // 第二个：<h2>,h2
}

// 替换
var str = "John Bull";
var regexp = /(\w+) (\w+)/;
str.replace(regexp, "$2, $1"); // 'Bull John'

// 按编号反向引用：\N
// 在模式中 \1 表示“找到与第一组相同的文本”
var str = `He said: "She's the one!".`;
var regexp = /(['"])(.*?)\1/g;
str.match(regexp); // ["She's the one!"]
