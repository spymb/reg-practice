// 字符类（Character classes） 是一种特殊的符号，匹配特定集合中的任何符号

// 提取数字
var str = "+7(903)-123-45-67";
var regexp = /\d/g;
str.match(regexp).join(""); // 79031234567

// \d（“d” 来自 “digit”）0-9
// \s（“s” 来自 “space”）包括空格，制表符 \t，换行符 \n
// \w（“w” 来自 “word”）拉丁字母或数字或下划线 _
// \d\s\w    1 a

// 提取数字-反向类
str.replace(/\D/g, "");

// 启用 “dotall” 模式，允许点 . 匹配换行符 \n
// 这就是修饰符 s 所做的事。如果有一个正则表达式具有该修饰符，那么点 . 能够匹配任何字符
"A\nB".match(/A.B/s)
