import { authSessionStorageKey, requestedScopes } from './authConfig.js'

export function storeAuthSession(account) {
  if (!account) {
    return
  }

  const sessionData = {
    isAuthenticated: true,
    account: {
      name: account.name ?? '',
      username: account.username ?? '',
      homeAccountId: account.homeAccountId ?? '',
      tenantId: account.tenantId ?? '',
    },
    scopes: requestedScopes,
    authenticatedAt: new Date().toISOString(),
  }

  sessionStorage.setItem(authSessionStorageKey, JSON.stringify(sessionData))
}

export function clearAuthSession() {
  sessionStorage.removeItem(authSessionStorageKey)
}

export function getAuthSession() {
  const rawSession = sessionStorage.getItem(authSessionStorageKey)

  if (!rawSession) {
    return null
  }

  try {
    return JSON.parse(rawSession)
  } catch {
    return null
  }
}