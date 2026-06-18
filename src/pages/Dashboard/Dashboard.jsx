import { useMemo } from "react";
import { useMsal } from "@azure/msal-react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AuthLayout from "../../components/AuthLayout/AuthLayout.jsx";
import { getAuthSession } from "../../authSession.js";
import { requestedScopes } from "../../authConfig.js";
import { HeroCard, ScopeCard, ScopeGrid, Wrapper } from "./Dashboard.styles.js";

function Dashboard() {
  const { instance, accounts } = useMsal();
  const activeAccount = instance.getActiveAccount() ?? accounts[0] ?? null;
  const authSession = getAuthSession();

  const displayName = useMemo(
    () => activeAccount?.name ?? activeAccount?.username ?? "Signed in user",
    [activeAccount],
  );

  return (
    <AuthLayout>
      <Wrapper>
        <HeroCard elevation={0}>
          <Stack spacing={2.5}>
            <Typography variant="overline" color="text.secondary">
              Dashboard
            </Typography>
            <Typography variant="h4" component="h1" fontWeight={800}>
              Welcome, {displayName}
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="70ch">
              You are signed in through Microsoft Entra ID. This is the
              protected dashboard route for the React SPA.
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label="Authenticated" color="primary" />
              <Chip label="Popup login" variant="outlined" />
              <Chip label="MSAL React" variant="outlined" />
            </Stack>

            <Typography variant="body2" color="text.secondary">
              Session storage is now holding the login success payload and the
              requested scopes for this session.
            </Typography>
          </Stack>
        </HeroCard>

        <HeroCard elevation={0}>
          <Stack spacing={1.5}>
            <Typography variant="h6" fontWeight={700}>
              Stored session
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {authSession?.account?.username ?? "No session data found"}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {authSession?.scopes?.map((scope) => (
                <Chip key={scope} label={scope} variant="outlined" />
              ))}
            </Stack>
          </Stack>
        </HeroCard>

        <ScopeGrid>
          {requestedScopes.map((scope) => (
            <ScopeCard elevation={0} key={scope}>
              <Typography variant="body2" color="text.secondary">
                Scope
              </Typography>
              <Typography variant="h6" component="div" fontWeight={700}>
                {scope}
              </Typography>
            </ScopeCard>
          ))}
        </ScopeGrid>
      </Wrapper>
    </AuthLayout>
  );
}

export default Dashboard;
