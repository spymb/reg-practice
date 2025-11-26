// 修饰符 /u 搭配字符类 \p{...}（模式）

// 提取中文
var regexp = /\p{sc=Han}/gu; // 返回中文象形文字
var str = `Hello Привет 你好 123_456`;
str.match(regexp); // [你, 好]

// 提取货币，Unicode 属性 \p{Currency_Symbol}，缩写为 \p{Sc}
var regexp = /\p{Sc}\d/gu;
var str = `Prices: $2, €1, ¥9`;
str.match(regexp); // [$2, €1, ¥9]
