import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector'

export const i18nInstance = i18n.createInstance({
    lng: 'en',                                        // default lang
    ns:[],                                            // name spacing
    keySeparator: '.',                                //  "item": {"label1": "Label1", "label1": "Label1"} - object seklinde olduqda - item.label1
    nsSeparator: ":",                                 // t{"Home:surname"}
    defaultNS: 'Common',                              //default name space
    fallbackLng: 'az',                                //component yuklenmeyibse default lang
    supportedLngs: ['az', 'ru', 'en'],                // saytimizin olacagi diller
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'      // Hardan extends(public fileden load eden hisse) edir 
    },
    detection:{
        htmlTag: document.documentElement,
        lookupCookie: 'lang',
        lookupLocalStorage: 'lang',
        cookieMinutes: 525949, // 1 year
        order: ['cookie', 'localStorage'],
        caches: ['cookie', 'localStorage']
    },
    // interpolation: {
    //     escapeValue: false,
    //     formatSeparator: ','
    // },
    // pluralSeparator: "-"                                       
})
.use(languageDetector)
.use(HttpApi)
.use(initReactI18next)


// First -      npm install react-i18next i18next --save
// Second -     npm install i18next-http-backend
// Third -      npm i i18next-browser-languagedetector

