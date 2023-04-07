declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ID?: string,
      API_URL?: string,
      APP_SCOPE?: string,
      OAUTH_PROVIDER_URL?: string,
      OAUTH_AUTHORIZATION_URL?: string,
      OAUTH_TOKEN_URL?: string,
      OAUTH_USER_INFO_URL?: string,
      OAUTH_END_SESSION_URL?: string,
      OAUTH_REDIRECT_URI?: string,
    }
  }
}
