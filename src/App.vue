<!-- cSpell:disable -->
<template>
  <section>
    <h1 style="color: OrangeRed">{{ $t('changeLocale') }}</h1>
    <button
      v-for="lang in $i18n.availableLocales"
      :key="`locale-${lang}`"
      v-html="$t(`localeName.${lang}`)"
      @click="$i18n.locale = lang /* changeLocale(lang) */"
    />
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  </section>
  <br />
  <hr />
  <section>
    <h3>BASIC</h3>
    <span>{{ $t('confirm') }}</span> |
    <span>{{ cancelMsg }}</span>
  </section>
  <section>
    <h3>LITERAL INTERPOLATION</h3>
    <span>{{ $t('email', { account: 'johan', domain: 'gmail.com' }) }}</span>
  </section>
  <section>
    <h3>NAMED INTERPOLATION</h3>
    <span>{{ $t('sayHello', { name: $t('name') }) }}</span>
  </section>
  <section>
    <h3>LIST INTERPOLATION</h3>
    <span>{{ $t('greeting', [$t('day.morning'), $t('day.evening')]) }}</span>
  </section>
  <section>
    <h3>PLURALIZATION</h3>
    <span>{{ $t('car', 100) }}</span>
  </section>
  <section>
    <h3>LINKED MESSAGES</h3>
    <span>{{ $t('linked') }}</span>
  </section>
  <section>
    <h3>BUILT-IN MODIFIERS</h3>
    <span>{{ $t('builtInModifiers') }}</span>
  </section>
  <section>
    <h3>CUSTOM MODIFIERS</h3>
    <span>{{ $t('customModifiers') }}</span>
  </section>
  <section>
    <h3>DATETIME FORMATTING</h3>
    <span>{{ $d(new Date(), 'long', formattingLocale($i18n.locale)) }}</span>
  </section>
  <section>
    <h3>NUMBER FORMATS</h3>
    <span
      ><b>CURRENCY : </b
      >{{
        $n(setCurrency(1000000), 'currency', formattingLocale($i18n.locale))
      }}</span
    >
    |
    <span
      ><b>DECIMAL : </b
      >{{ $n(12.11612345, 'decimal', formattingLocale($i18n.locale)) }}</span
    >
    |
    <span
      ><b>PERCENT : </b>
      {{ $n(0.79173, 'percent', formattingLocale($i18n.locale)) }}</span
    >
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed, onUpdated } from 'vue';

export default {
  name: 'App',
  i18n: {
    datetimeFormats: {
      'us-GB': {
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
          hour12: true, // 12시간 표기 여부 (오후 1:27 | 14:27)
        },
      },
    },
  },
  setup() {
    const { t, d, availableLocales, locale } = useI18n();
    const consoleStyle = [
      'color: OrangeRed',
      'background-color: PapayaWhip',
    ].join(';');

    console.info(
      `%cAVAILABLE_LOCALES: ${availableLocales}\nCURRENT_LOCALE: ${locale.value}`,
      consoleStyle,
    );

    onUpdated(() => {
      console.info(`%cCURRENT_LOCALE: ${locale.value}`, consoleStyle);
    });

    const setCurrency = num => {
      switch (locale.value) {
        case 'en':
        case 'en-US':
          return num / 1100;
        case 'zh':
        case 'zh-CN':
          return num / 175;
        default:
          return num;
      }
    };

    const cancelMsg = computed(() => t('cancel'));
    const formattingLocale = lang => {
      switch (lang) {
        case 'ko':
          return 'ko-KR';
        case 'en':
          return 'en-US';
        case 'zh':
          return 'zh-CN';
        default:
          return lang;
      }
    };

    console.info(
      `%cCURRENT_TIME: ${d(
        new Date(),
        'long',
        formattingLocale(locale.value),
      )}`,
      consoleStyle,
    );

    return { cancelMsg, formattingLocale, setCurrency };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 20px;

  section button {
    height: 30px;
    margin-right: 10px;
  }
  section > button:last-child {
    margin-right: 0;
  }

  .locale-changer {
    display: inline-block;
    select {
      height: 30px;
      width: 50px;
    }
  }
}
</style>
