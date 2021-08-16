/* cSpell:disable */
export default {
  confirm: '확인',
  cancel: '취소',
  name: '조안',
  sayHello: '안녕하세요 {name}', // Named interpolation
  greeting: '좋은 {0}입니다', // List interpolation
  car: '자동차 0대 | 자동차 1대 | 자동차 여러대', // Pluralization
  email: "{account}{'@'}{domain}", // Literal interpolation
  linked: '@:localeName.ko / @:localeName.en / @:localeName.zh', // Linked messages
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
    ko: '한국어',
    en: '영어',
    zh: '중국어',
  },
  // more option: https://tc39.es/ecma402/#datetimeformat-objects
  datetimeFormats: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false, // 12시간 표기 여부 (오후 1:27 | 14:27)
    },
  },
};
