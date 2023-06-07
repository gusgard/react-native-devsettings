# react-native-devsettings

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://www.npmjs.com/package/react-native-devsettings)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://www.npmjs.com/package/react-native-devsettings)
[![npm](https://img.shields.io/npm/v/react-native-devsettings.svg)](https://www.npmjs.com/package/react-native-devsettings)
![license](https://img.shields.io/npm/l/react-native-devsettings)

<!-- [![npm](https://img.shields.io/npm/dm/react-native-devsettings.svg)](https://www.npmjs.com/package/react-native-devsettings) -->

Enable react-native-debugger and chrome debugger on Hermes (when `__DEV__` is `true`)

## Installation

```sh
npm install react-native-devsettings
```

or

```sh
yarn add react-native-devsettings
```

## Usage

Add the following line to your `App.tsx` file

```js
import "react-native-devsettings";
// OR if you are using AsyncStorage
import "react-native-devsettings/withAsyncStorage";
```

Execute `cmd+d` or `cmd+m` on your simulator/emulator and select `(*) Debug JS Remotely`

![Example](example.png)
