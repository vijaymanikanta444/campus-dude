---
description: Workspace context for the React login SPA
---

# Application Context

- This project is a Vite + React SPA.
- Authentication uses `@azure/msal-browser` and `@azure/msal-react`.
- The login screen lives in `src/components/Login/Login.jsx`.
- Keep component logic and styles in separate same-named files, for example `Login.jsx` and `Login.styles.js`.
- Apply the same file pairing convention to new components such as `AuthLayout.jsx`/`AuthLayout.styles.js` and `Dashboard.jsx`/`Dashboard.styles.js`.
- Shared theme tokens live in `src/theme.js`.
- The app is wrapped with both MUI and styled-components theme providers in `src/main.jsx`.
- Keep the login page minimal: college logo placeholder plus a Microsoft sign-in button.
- Use MUI components for the UI and styled-components for custom layout/styling.
- Use `src/assets/viet-logo.png` for the college logo in auth screens.
- After login success, navigate to the `/dashboard` route.
- Persist the successful login payload in `sessionStorage` and clear it on logout.
- Show the requested scope values in the dashboard and profile screens.
- Auth screens should use a shared header with the college logo on the left and the avatar on the right.
- Clicking the avatar should open a menu with `Profile` and `Logout` actions using icons.
- MSAL popup auth should use the dedicated `auth.html` redirect bridge page instead of the main SPA route.
- Azure environment variables are defined in `.env.example`.
