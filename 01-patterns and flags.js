// 模式，修饰符
var regexp = new RegExp("pattern", "flags");

var reg = /pattern/; // 无修饰符
var reg = /pattern/gim; // 有修饰符

// str.match(regexp)
var str = "We will, we will rock you";
str.match(/we/gi); // [We, we]

var matches = "JavaScript".match(/HTML/); // = null

// str.replace(regexp, replacementStr)
"We will, we will".replace(/we/i, "I"); // I will, we will

// regexp.test(str)
var str = "I love JavaScript";
var regexp = /LOVE/i;
regexp.test(str); // true
