import { LogLevel, PublicClientApplication } from "@azure/msal-browser";

const clientId = import.meta.env.VITE_AZURE_AD_CLIENT_ID ?? "";
const tenantId = import.meta.env.VITE_AZURE_AD_TENANT_ID ?? "common";
const redirectUri =
  import.meta.env.VITE_AZURE_AD_REDIRECT_URI ??
  `${window.location.origin}/auth.html`;

export const requestedScopes = ["email", "openid", "profile", "User.Read"];

export const authSessionStorageKey = "viet-auth-session";

export const msalConfig = {
  auth: {
    clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri,
    postLogoutRedirectUri: redirectUri,
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    navigatePopups: false,
    loggerOptions: {
      loggerCallback(logLevel, message, containsPii) {
        if (containsPii || logLevel > LogLevel.Warning) {
          return;
        }

        console.log(message);
      },
    },
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
  scopes: requestedScopes,
};

export const isAuthConfigured = Boolean(clientId);
