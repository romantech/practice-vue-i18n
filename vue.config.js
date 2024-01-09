// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0], {
        // Feature flag __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ is not explicitly defined... 오류 해결
        // https://vuejs.org/api/compile-time-flags
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
      });
      return definitions;
    });
  },
  // reference : https://cli.vuejs.org/zh/guide/deployment.html
  // publicPath 에 아무것도 입력하지 않으면 https://<USERNAME>.github.io/ 주소로 접속됨
  // https://<USERNAME>.github.io/<REPO>/ 주소로 접속하고 싶으면
  // publicPath 속성에 프로젝트 이름 입력 ex) /project-name/
  publicPath:
    process.env.NODE_ENV === 'production' ? '/practice-vue-i18n/' : '/',
  outputDir: 'docs', // 빌드 output 폴더
};
