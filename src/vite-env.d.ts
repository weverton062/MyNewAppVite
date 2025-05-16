/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_STORAGE_BUCKET: string;
    readonly VITE_MESSAGING_SENDER_ID: string;
    readonly VITE_APP_ID: string;
    readonly VITE_API_URL_BASE: string;
    readonly VITE_API_APP_TOKEN: string;
    // adicione mais conforme necessário
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }