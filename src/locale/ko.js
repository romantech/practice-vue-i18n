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
  numberFormats: {
    // reference: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    currency: {
      style: 'currency', // currency | decimal(기본값) | percent
      currency: 'KRW', // ISO 4217 통화 코드
      currencyDisplay: 'code', // symbol(기본값) | name | code
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
