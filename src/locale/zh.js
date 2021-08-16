/* cSpell:disable */
export default {
  changeLocale: '切换语言',
  confirm: '确认',
  cancel: '取消',
  name: '约翰',
  sayHello: '您好 {name}', // Named interpolation
  greeting: '{0}好', // List interpolation
  car: '0台车 | 1台车 | 多台车', // Pluralization
  email: "{account}{'@'}{domain}", // Literal interpolation
  // linked: '@:localeName.ko / @:localeName.en / @:localeName.zh', // Linked messages
  linked: "@:localeName.en {'|'} @:localeName.ko {'|'} @:localeName.zh", // Linked messages(리터럴 사용시)
  english: 'english',
  helloWorld: 'Hello World',
  builtInModifiers: '@.upper:english', // Built-in Modifiers
  customModifiers: "@.snakeCase:{'helloWorld'}", // Custom Modifiers
  day: {
    morning: '早上',
    afternoon: '中午',
    evening: '晚上',
  },
  localeName: {
    en: '英文',
    ko: '韩文',
    zh: '中文',
  },
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
      hour12: true, // 24시간 표시 여부
    },
  },
};
