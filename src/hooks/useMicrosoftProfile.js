// src/hooks/useMicrosoftProfile.js

import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";

export const useMicrosoftProfile = () => {
  const { instance } = useMsal();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const account =
          instance.getActiveAccount() || instance.getAllAccounts()[0];

        if (!account) {
          setLoading(false);
          return;
        }

        const tokenResponse = await instance.acquireTokenSilent({
          scopes: ["User.Read"],
          account,
        });

        const response = await fetch("https://graph.microsoft.com/v1.0/me", {
          headers: {
            Authorization: `Bearer ${tokenResponse.accessToken}`,
          },
        });

        const data = await response.json();

        setProfile(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [instance]);

  return {
    profile,
    loading,
    error,
  };
};
