import { useEffect } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

import AppRouter from "./routes/AppRouter";
import Loader from "./components/Loader/Loader.jsx";
import { storeAuthSession } from "./authSession.js";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress } = useMsal();

  useEffect(() => {
    const account = instance.getActiveAccount() || instance.getAllAccounts()[0];
    if (account) {
      instance.setActiveAccount(account);
      storeAuthSession(account);
    }
  }, [instance, isAuthenticated]);

  if (inProgress !== "none") {
    return <Loader fullscreen text="Authenticating with Microsoft..." />;
  }

  return <AppRouter />;
}

export default App;
