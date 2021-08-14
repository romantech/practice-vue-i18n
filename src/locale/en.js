export default {
  confirm: 'confirmation',
  cancel: 'cancellation',
  sayHello: 'Hello {name}', // Named interpolation
  hello: 'Good {0}', // List interpolation
  car: 'car | cars', // Pluralization
  email: "{account}{'@'}{domain}", // Literal interpolation
  linked: '@:sayHello @:hello', // Linked messages
  english: 'english',
  helloWorld: 'Hello World',
  builtInModifiers: '@.upper:english', // Built-in Modifiers
  customModifiers: "@.snakeCase:{'helloWorld'}", // Built-in Modifiers
  day: {
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
  },
  changeLocale: {
    korean: 'Korean',
    english: 'English',
    chinese: 'Chinese',
  },
};
