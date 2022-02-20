// reference : https://cli.vuejs.org/zh/guide/deployment.html
// publicPath 에 아무것도 입력하지 않으면 https://<USERNAME>.github.io/ 주소로 접속됨
// https://<USERNAME>.github.io/<REPO>/ 주소로 접속하고 싶으면
// publicPath 속성에 프로젝트 이름 입력 ex) /project-name/

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/practice-vue-i18n/' : '/',
  outputDir: 'docs', // 빌드 output 폴더
};
