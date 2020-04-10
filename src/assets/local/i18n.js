import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import ar from './ar';

Vue.use(VueI18n);

const messages = {
  ...ar, 
  ...en
}

export const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'ar', // set fallback locale
    messages, // set locale messages
});