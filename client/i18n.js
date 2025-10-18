import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslation from './src/config/locales/en/translation.json'
import plTranslation from './src/config/locales/pl/translation.json'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: { escapeValue: false },
        resources: {
            en: { translation: enTranslation },
            pl: { translation: plTranslation },
        },
    })

export default i18n
