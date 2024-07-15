import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to the book store",
        }
      },
      uk: {
        translation: {
          "welcome": "Ласкаво просимо до книжкового магазину",
        }
      }
    },
    lng: "uk",
    fallbackLng: "uk",

    interpolation: {
      escapeValue: false
    }
  });
  // i18n.changeLanguage("en")

export default i18n;