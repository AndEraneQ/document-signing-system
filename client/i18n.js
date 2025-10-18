import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use('en')
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: { escapeValue: false },
        resources: {
            en: { translation: require('./locales/en/translation.json') },
            pl: { translation: require('./locales/pl/translation.json') },
        },
    })

export default i18n
