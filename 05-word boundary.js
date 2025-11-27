// 词边界的词指的是 \w，表示拉丁字母 a-z（或数字或下划线）
"Hello, Java!".match(/\bJava\b/) // [Java]
"Hello, JavaScript!".match(/\bJava\b/) // null
"Hello, Java!".match(/\bJava!\b/) // null（无匹配项）
"1 23 456 78".match(/\b\d\d\b/g) // [23, 78]