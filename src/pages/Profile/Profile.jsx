import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AuthLayout from "../../components/AuthLayout/AuthLayout.jsx";
import { getAuthSession } from "../../authSession.js";
import { requestedScopes } from "../../authConfig.js";
import {
  DetailGrid,
  ProfileCard,
  ScopeCard,
  ScopeGrid,
  Wrapper,
} from "./Profile.styles.js";
import { useMicrosoftProfile } from "../../hooks/useMicrosoftProfile";

function Profile() {
  const authSession = getAuthSession();
  const { profile, loading, error } = useMicrosoftProfile();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading profile</div>;
  }

  console.log({ profile });
  return (
    <AuthLayout>
      <Wrapper>
        <ProfileCard elevation={0}>
          <Stack spacing={2}>
            <Typography variant="overline" color="text.secondary">
              Profile
            </Typography>
            <Typography variant="h4" component="h1" fontWeight={800}>
              Account details
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="70ch">
              This page shows the stored session payload after a successful
              login.
            </Typography>

            <DetailGrid>
              <Stack spacing={0.5}>
                <Typography variant="body2" color="text.secondary">
                  Name
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  {authSession?.account?.name ?? "Not available"}
                </Typography>
              </Stack>
              <Stack spacing={0.5}>
                <Typography variant="body2" color="text.secondary">
                  Username
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  {authSession?.account?.username ?? "Not available"}
                </Typography>
              </Stack>
            </DetailGrid>

            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip
                label={
                  authSession?.isAuthenticated ? "Session stored" : "No session"
                }
                color={authSession?.isAuthenticated ? "success" : "default"}
              />
              <Chip
                label={authSession?.authenticatedAt ?? "No timestamp"}
                variant="outlined"
              />
            </Stack>
          </Stack>
        </ProfileCard>

        <ScopeGrid>
          {requestedScopes.map((scope) => (
            <ScopeCard elevation={0} key={scope}>
              <Typography variant="body2" color="text.secondary">
                Scope value
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

export default Profile;
