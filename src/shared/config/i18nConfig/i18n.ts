import i18n, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(initReactI18next).use(LanguageDetector).use(Backend).init({
  debug: true,
  // resources: {
  //   en: {
  //     translation: {
  //       'Welcome to React': 'Welcome to React and react-i18next',
  //     },
  //   },
  //   ua: {
  //     translation: {
  //       'Welcome to React': 'Привіт Реакт',
  //     },
  //   },
  // },
  fallbackLng: 'en',
});
