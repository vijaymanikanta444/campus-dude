import { useEffect, useState, useCallback } from "react";
import { msalInstance } from "../msalInstance";

const GRAPH_ENDPOINT = "https://graph.microsoft.com/v1.0/me/events";

export const useMicrosoftCalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getToken = async () => {
    const account = msalInstance.getActiveAccount();

    if (!account) {
      throw new Error("No active account found");
    }

    const response = await msalInstance.acquireTokenSilent({
      account,
      scopes: ["Calendars.Read"],
    });

    return response.accessToken;
  };

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const token = await getToken();

      const res = await fetch(GRAPH_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch calendar events");
      }

      const data = await res.json();

      setEvents(data.value || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents,
  };
};
