<template>
  <section>
    <h2>Basic</h2>
    <span>{{ $t('confirm') }}</span> |
    <span>{{ cancelMsg }}</span>
  </section>
  <section>
    <h2>Literal interpolation</h2>
    <span>{{ $t('email', { account: 'johan', domain: 'gmail.com' }) }}</span>
  </section>
  <section>
    <h2>Named interpolation</h2>
    <span>{{ $t('sayHello', { name: 'John' }) }}</span>
  </section>
  <section>
    <h2>List interpolation</h2>
    <span>{{ $t('hello', [$t('day.morning'), $t('day.evening')]) }}</span>
  </section>
  <section>
    <h2>Pluralization</h2>
    <span>{{ $tc('car', 2) }}</span>
  </section>
  <section>
    <h2>Linked messages</h2>
    <span>{{ $t('linked', { name: 'John' }, [$t('day.morning')]) }}</span>
  </section>
  <section>
    <h2>Built-in Modifiers</h2>
    <span>{{ $t('builtInModifiers') }}</span>
  </section>
  <section>
    <h2>Custom Modifiers</h2>
    <span>{{ $t('customModifiers') }}</span>
  </section>
  <section>
    <h2 style="color: darkred">Change Locale</h2>
    <button
      v-for="lang in ['korean', 'english', 'chinese']"
      :key="`locale-${lang}`"
      v-html="$t(`changeLocale.${lang}`)"
      @click="changeLocale(lang)"
    ></button>
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
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  name: 'App',
  setup() {
    const { t, availableLocales, locale } = useI18n();
    console.log('availableLocales: ', availableLocales);
    const cancelMsg = computed(() => t('cancel'));
    const changeLocale = lang => {
      locale.value = (() => {
        switch (lang) {
          case 'korean':
            return 'ko';
          case 'english':
            return 'en';
          case 'chinese':
            return 'zh';
        }
      })();
    };
    return { cancelMsg, changeLocale };
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

  section button {
    margin-right: 10px;
  }
  section > button:last-child {
    margin-right: 0;
  }

  .locale-changer {
    display: inline-block;
    select {
      height: 23px;
      width: 50px;
    }
  }
}
</style>
