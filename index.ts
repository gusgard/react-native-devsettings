import { NativeModules, DevSettings } from 'react-native';

// Tested with React Native 0.71
const main = async () => {
  const message = {
    stop: '(*) Stop Debugging',
    debug: '(*) Debug JS Remotely',
  };
  const storageKey = '@RNDS/isDebuggingRemotely';
  try {
    const AsyncStorage = require('@react-native-async-storage/async-storage').default;
    const isDebuggingRemotelyString = await AsyncStorage.getItem(storageKey);
    let isDebuggingRemotely = isDebuggingRemotelyString === 'true';
    DevSettings.addMenuItem(isDebuggingRemotely ? message.stop : message.debug, async () => {
      isDebuggingRemotely = !isDebuggingRemotely;

      await AsyncStorage.setItem(storageKey, JSON.stringify(isDebuggingRemotely));
      NativeModules.DevSettings.setIsDebuggingRemotely(isDebuggingRemotely);
    });
  } catch (error) {
    DevSettings.addMenuItem(message.debug, () => {
      NativeModules.DevSettings.setIsDebuggingRemotely(true);
    });
    DevSettings.addMenuItem(message.stop, () => {
      NativeModules.DevSettings.setIsDebuggingRemotely(false);
    });
  }
};

if (__DEV__) {
  // add a delay to avoid issue with React Native Debugger
  setTimeout(main, 100);
}
