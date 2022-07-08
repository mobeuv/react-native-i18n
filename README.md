<p align="center">
  <img src="./assets/banner.png" alt="i18n">
</p>
<p align="center">
  <a href="https://tldrlegal.com/license/mit-license"><img src="https://img.shields.io/:License-MIT-blue.svg" alt="MIT License"></a>
</p>

## The Package

This package is a fork of (https://github.com/AlexanderZaytsev/react-native-i18n). All rights to the fork go to the proper authors under the MIT license (https://github.com/AlexanderZaytsev) We created this fork to make the package available with future fixes and new features.

## Installation

```bash
yarn add @mobeuv/react-native-i18n
```

## Usage

```bash
# i18N.ts

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

```

```bash
# Using in rendering
import * as React from 'react';
import {View, Text } from 'react-native';
import I18n from './i18n';

export default function App() {
  return (
    <View>
      <Text>{I18n.t(['HomeScreen', 'welcome'])}</Text>
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
