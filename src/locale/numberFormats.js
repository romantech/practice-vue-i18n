/* cSpell:disable */
export default {
  ko: {
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
  en: {
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
  zh: {
    // reference: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    currency: {
      style: 'currency', // currency | decimal(기본값) | percent
      currency: 'CNY', // ISO 4217 통화 코드
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
