/* cSpell:disable */
export default {
  changeLocale: '언어 변경',
  confirm: '확인',
  cancel: '취소',
  name: '조안',
  sayHello: '안녕하세요 {name}', // Named interpolation
  greeting: '좋은 {0}입니다', // List interpolation
  car: '자동차 0대 | 자동차 1대 | 자동차 여러대', // Pluralization
  email: "{account}{'@'}{domain}", // Literal interpolation
  // linked: '@:localeName.ko / @:localeName.en / @:localeName.zh', // Linked messages
  linked: "@:localeName.en {'|'} @:localeName.ko {'|'} @:localeName.zh", // Linked messages(리터럴 사용시)
  english: 'english',
  helloWorld: 'Hello World',
  builtInModifiers: '@.upper:english', // Built-in Modifiers
  customModifiers: "@.snakeCase:{'helloWorld'}", // Custom Modifiers
  day: {
    morning: '아침',
    afternoon: '점심',
    evening: '저녁',
  },
  localeName: {
    en: '영어',
    ko: '한국어',
    zh: '중국어',
  },
};
