export default {
  confirm: '확인',
  cancel: '취소',
  sayHello: '안녕하세요 {name}', // Named interpolation
  hello: '좋은 {0}입니다', // List interpolation
  car: '자동차 | 자동차들', // Pluralization
  email: "{account}{'@'}{domain}", // Literal interpolation
  linked: '@:sayHello @:hello', // Linked messages
  english: 'english',
  helloWorld: 'Hello World',
  builtInModifiers: '@.upper:english', // Built-in Modifiers
  customModifiers: "@.snakeCase:{'helloWorld'}", // Built-in Modifiers
  day: {
    morning: '아침',
    afternoon: '점심',
    evening: '저녁',
  },
  changeLocale: {
    korean: '한국어',
    english: '영어',
    chinese: '중국어',
  },
};
