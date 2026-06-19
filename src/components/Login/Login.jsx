import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import vietLogo from "../../assets/viet-logo.png";
import {
  Page,
  Card,
  BrandMark,
  BrandLogo,
  ButtonRow,
  CustomStack,
} from "./Login.styles.js";
import { isAuthConfigured, loginRequest } from "../../authConfig.js";
import { storeAuthSession } from "../../authSession.js";

const MicrosoftLogo = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 21 21"
    aria-hidden="true"
    focusable="false"
  >
    <path fill="#f35325" d="M1 1h9v9H1z" />
    <path fill="#81bc06" d="M11 1h9v9h-9z" />
    <path fill="#05a6f0" d="M1 11h9v9H1z" />
    <path fill="#ffba08" d="M11 11h9v9h-9z" />
  </svg>
);

function Login() {
  const { instance } = useMsal();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();

  const actionLabel = useMemo(
    () =>
      isAuthenticated ? "Continue with Microsoft" : "Sign in with Microsoft",
    [isAuthenticated],
  );

  const handleLogin = async () => {
    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <Page>
      <Card elevation={0}>
        <CustomStack spacing={3.5} alignItems="center" textAlign="center">
          <BrandMark>
            <BrandLogo src={vietLogo} alt="VIET logo" />
          </BrandMark>

          <Stack spacing={1} alignItems="center" textAlign="center">
            <Typography variant="h4" component="h1" fontWeight={800}>
              Welcome back
            </Typography>
            {/* <Typography variant="body1" color="text.secondary" maxWidth="50ch">
              Sign in to access the React SPA using your Microsoft account.
            </Typography> */}
          </Stack>

          <ButtonRow>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              disabled={!isAuthConfigured}
              startIcon={<MicrosoftLogo />}
            >
              {actionLabel}
            </Button>
          </ButtonRow>
        </CustomStack>
      </Card>
    </Page>
  );
}

export default Login;
