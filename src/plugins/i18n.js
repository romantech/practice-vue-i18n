/* cSpell:disable */
import { createI18n } from 'vue-i18n';
import ko from '@/locale/ko';
import en from '@/locale/en';
import zh from '@/locale/zh';

const getLang = () => {
  if (navigator.languages.length > 0) {
    return navigator.languages[0];
  }
  return navigator.language;
};

// 즉시 실행 함수
// const getLocale = (() => {
//   const lang = getLang();
//   switch (lang) {
//     case 'ko-KR':
//       return 'ko';
//     case 'en-US':
//       return 'en';
//     case 'zh-Cn':
//       return 'zh';
//     default:
//       return 'ko';
//   }
// })();

export default createI18n({
  locale: getLang(),
  fallbackLocale: {
    // set fallback locale
    'ko-KR': ['ko'],
    'en-US': ['en'],
    'zh-Cn': ['zh'],
    default: ['ko', 'en', 'zh'],
  },
  messages: {
    ko,
    en,
    zh,
  },
  datetimeFormats: {
    ko: ko.datetimeFormats,
    en: en.datetimeFormats,
    zh: zh.datetimeFormats,
  },
  modifiers: {
    // custom modifiers
    snakeCase: str => str.split(' ').join('_'),
  },
  silentTranslationWarn: true, // 개발모드에서 translation warn 끄기
  silentFallbackWarn: true, // 개발모드에서 fallback warn 끄기
});
