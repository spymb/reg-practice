"I'm not 12, but 1234 years old".match(/\d{3,5}/); // ["1234"]
"I'm not 12, but 345678 years old".match(/\d{3,}/); // ["345678"]
// + 代表“一个或多个”，与 {1,} 相同
"+7(903)-123-45-67".match(/\d+/g); // [7, 903, 123, 45, 67]
// ? 代表“零个或一个”，与 {0,1} 相同
"Should I write color or colour?".match(/colou?r/g); // [color, colour]
// * 代表“零个及以上”，与 {0,} 相同
"100 10 1".match(/\d0*/g); // [100, 10, 1]
