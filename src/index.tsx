import { NativeModules, Platform } from 'react-native';
const I18nJs = require('i18n-js');

const LINKING_ERROR =
  `The package '@mobeuv/react-native-i18n' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const ReactNativeI18n = NativeModules.ReactNativeI18n
  ? NativeModules.ReactNativeI18n
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

if (typeof ReactNativeI18n !== 'undefined') {
  I18nJs.locale = ReactNativeI18n.languages[0];
} else if (__DEV__) {
  new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );
}

export function getLanguages(): Promise<string[]> {
  return ReactNativeI18n.getLanguages;
}

export default I18nJs;
