"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

var _i18nextXhrBackend = _interopRequireDefault(require("i18next-xhr-backend"));

var _translation = _interopRequireDefault(require("./locales/en/translation.json"));

var _translation2 = _interopRequireDefault(require("./locales/es/translation.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_i18next["default"].use(_i18nextXhrBackend["default"]).use(_i18nextBrowserLanguagedetector["default"]).init({
  debug: false,
  lng: "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translations: _translation["default"]
    },
    es: {
      translations: _translation2["default"]
    }
  },
  ns: ["translations"],
  defaultNS: "translations"
});

var _default = _i18next["default"];
exports["default"] = _default;