import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0.98);
  }

  50% {
    opacity: 1;
    transform: scale(1.02);
  }

  100% {
    opacity: 0.5;
    transform: scale(0.98);
  }
`;

export const StyledLoaderContainer = styled.div`
  min-height: ${({ $fullscreen }) => ($fullscreen ? "100vh" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const StyledLogo = styled.img`
  width: 120px;
  height: auto;
  animation: ${shimmer} 1.8s ease-in-out infinite;
`;
