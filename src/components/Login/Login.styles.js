import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

export const Page = styled.main`
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.page};
  background:
    radial-gradient(circle at top, rgba(96, 165, 250, 0.26), transparent 32%),
    radial-gradient(
      circle at bottom right,
      rgba(244, 114, 182, 0.16),
      transparent 30%
    ),
    ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
`;

export const Card = styled(Paper)`
  width: min(550px, 100%);
  padding: ${({ theme }) => theme.spacing.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface},
    ${({ theme }) => theme.colors.surfaceAlt}
  );
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const CustomStack = styled(Stack)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const BrandMark = styled.div`
  width: 132px;
  height: 132px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.textPrimary};
  background: rgba(255, 255, 255, 0.04);
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const BrandLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;

  .MuiButton-root {
    min-width: 260px;
    border-radius: 999px;
    padding: 13px 22px;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.25);
  }
`;

export const Hint = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;
