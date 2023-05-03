interface Window {
  __DEV__: boolean;
}

declare module "react-native" {
  export const NativeModules: NativeModules;
  export const DevSettings: DevSettings;
}

interface NativeModules {
  DevSettings: {
    setIsDebuggingRemotely: (isDebuggingRemotely: boolean) => void;
  };
}

interface DevSettings {
  addMenuItem: (title: string, handler: () => void) => void;
}
