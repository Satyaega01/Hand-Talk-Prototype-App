import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sekata.app',
  appName: 'sekata-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
