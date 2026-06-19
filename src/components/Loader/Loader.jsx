import { Typography } from "@mui/material";

import {
  StyledLoaderContainer,
  StyledLoaderContent,
  StyledLogo,
} from "./Loader.styles";

import Logo from "../../assets/viet-logo.png";

const Loader = ({ text = "Loading...", fullscreen = false }) => {
  return (
    <StyledLoaderContainer $fullscreen={fullscreen}>
      <StyledLoaderContent>
        <StyledLogo src={Logo} alt="App Logo" />

        <Typography variant="body1" color="text.secondary">
          {text}
        </Typography>
      </StyledLoaderContent>
    </StyledLoaderContainer>
  );
};

export default Loader;
