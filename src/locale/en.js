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
  numberFormats: {
    // reference: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    currency: {
      style: 'currency', // currency | decimal(기본값) | percent
      currency: 'USD', // ISO 4217 통화 코드
      currencyDisplay: 'symbol', // symbol(기본값) | name | code
      useGrouping: true, // 숫자 천단위 구분 여부. 기본값 true
      notation: 'standard', // 기본값 standard. compact는 천/만/억 등으로 축약하여 표시
      maximumFractionDigits: 0, // 최대 소수점
      /*
				환율 통화 코드 목록에서 제공하는 보조 단위 자릿수와 minDigts 중에서 큰 값이 기본값. 
				보조 단위 정보가 없으면 2가 기본값
			*/
    },
    decimal: {
      style: 'decimal', // 숫자
      minimumFractionDigits: 2, // 최소 소수점(숫자/백분율 서식 기본값은 0)
      maximumFractionDigits: 5, // 최대 소수점(숫자 서식은 minDigits와 3 중에서 큰 값이 기본값)
    },
    percent: {
      style: 'percent', // 백분율
      useGrouping: false,
      maximumFractionDigits: 2, // 최대 소수점(백분율 서식은 minDigits와 0 중에서 큰 값이 기본값)
    },
  },
};
