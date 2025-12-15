// 前瞻断言
var str = "1 turkey costs 30€";
alert( str.match(/\d+(?=€)/) ); // 30，数字 1 被忽略了，因为它后面没有 €

// 否定的前瞻断言
var str = "2 turkeys cost 60€";
alert( str.match(/\d+\b(?!€)/g) ); // 2（价格不匹配）