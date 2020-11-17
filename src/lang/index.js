import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
  en: () => require('./translations/en.json'),
  ar: () => require('./translations/ar.json'),
};

const fallback = {languageTag: 'en'};
const {languageTag} =
  RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
  fallback;

i18n.translations = {[languageTag]: translationGetters[languageTag]()};
i18n.locale = languageTag;

const setI18nConfig = () => {
  const fallback = {languageTag: 'en'};
  const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  translate.cache.clear();

  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);
// export const string = (str) => {
//   return i18n.translate(str);
// };
