declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      HOST?: string;
      JWT_SECRET?: string;
      ACCESS_TOKEN_EXPIRES_IN?: string;
      REFRESH_TOKEN_EXPIRES_IN?: string;
      OAUTH_GOOGLE_ID?: string;
      OAUTH_GOOGLE_SECRET?: string;
      OAUTH_GOOGLE_CALLBACK_URL?: string;
    }
  }
}
export {};
