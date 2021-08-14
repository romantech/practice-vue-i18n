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
  fallbackLocale: ['ko', 'en', 'zh'], // set fallback locale
  messages: {
    ko,
    en,
    zh,
  },
  modifiers: {
    snakeCase: str => str.split(' ').join('_'),
  },
});
