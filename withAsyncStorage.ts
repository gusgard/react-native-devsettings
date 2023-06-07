import { NativeModules, DevSettings } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tested with React Native 0.71
const withAsyncStorage = async () => {
  const message = {
    stop: '(*) Stop Debugging',
    debug: '(*) Debug JS Remotely',
  };
  const storageKey = '@RNDS/isDebuggingRemotely';
  const isDebuggingRemotelyString = await AsyncStorage.getItem(storageKey);
  let isDebuggingRemotely = isDebuggingRemotelyString === 'true';
  DevSettings.addMenuItem(isDebuggingRemotely ? message.stop : message.debug, async () => {
    isDebuggingRemotely = !isDebuggingRemotely;

    await AsyncStorage.setItem(storageKey, JSON.stringify(isDebuggingRemotely));
    NativeModules.DevSettings.setIsDebuggingRemotely(isDebuggingRemotely);
  });
};

if (__DEV__) {
  // add a delay to avoid issue with React Native Debugger
  setTimeout(withAsyncStorage, 100);
}
