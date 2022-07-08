import i18n from '@mobeuv/react-native-i18n';
import ptBr from './translations/pt.json';
import en from './translations/en.json';

// Enable fallbacks if you want `en-US`
// and `en-GB` to fallback to `en`
i18n.defaultLocale = 'pt-BR';

i18n.fallbacks = true;

i18n.translations = {
  'pt-BR': ptBr,
  en,
};

export default i18n;
