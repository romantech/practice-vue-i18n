export default {
  confirm: '确认',
  cancel: '取消',
  sayHello: '您好 {name}', // Named interpolation
  hello: '{0}好', // List interpolation
  car: '车 | 很多车', // Pluralization
  email: "{account}{'@'}{domain}", // Literal interpolation
  linked: '@:sayHello @:hello', // Linked messages
  english: 'english',
  helloWorld: 'Hello World',
  builtInModifiers: '@.upper:english', // Built-in Modifiers
  customModifiers: "@.snakeCase:{'helloWorld'}", // Built-in Modifiers
  day: {
    morning: '早上',
    afternoon: '中午',
    evening: '晚上',
  },
  localeName: {
    ko: '韩文',
    en: '英文',
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
      hour12: true,
    },
  },
};
