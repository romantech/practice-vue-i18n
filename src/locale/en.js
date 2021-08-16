/* cSpell:disable */
export default {
  changeLocale: 'CHANGE LOCALE',
  confirm: 'Confirm',
  cancel: 'Cancel',
  name: 'Johan',
  sayHello: 'Hello {name}', // Named interpolation
  greeting: 'Good {0}', // List interpolation
  car: 'no car | a car | cars', // Pluralization
  email: "{account}{'@'}{domain}", // Literal interpolation
  // linked: '@:localeName.ko / @:localeName.en / @:localeName.zh', // Linked messages
  linked: "@:localeName.en {'|'} @:localeName.ko {'|'} @:localeName.zh", // Linked messages(리터럴 사용시)
  english: 'english',
  helloWorld: 'Hello World',
  builtInModifiers: '@.upper:english', // Built-in Modifiers
  customModifiers: "@.snakeCase:{'helloWorld'}", // Custom Modifiers
  day: {
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
  },
  localeName: {
    en: 'English',
    ko: 'Korean',
    zh: 'Chinese',
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
    },
  },
};
