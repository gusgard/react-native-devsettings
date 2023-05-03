import { NativeModules, DevSettings } from "react-native";

// Tested with React Native 0.71
if (window.__DEV__) {
  DevSettings.addMenuItem("* Debug with Chrome", () => {
    NativeModules.DevSettings.setIsDebuggingRemotely(true);
  });
  DevSettings.addMenuItem("* Stop Debugging", () => {
    NativeModules.DevSettings.setIsDebuggingRemotely(false);
  });
}
