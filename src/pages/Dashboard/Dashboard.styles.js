import Card from '@mui/material/Card'
import styled from 'styled-components'

export const Wrapper = styled.section`
  width: min(1120px, 100%);
  display: grid;
  gap: 20px;
`

export const HeroCard = styled(Card)`
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface},
    ${({ theme }) => theme.colors.surfaceAlt}
  );
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.24);

  @media (max-width: 640px) {
    padding: 20px;
  }
`

export const ScopeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const ScopeCard = styled(Card)`
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.04);
  color: ${({ theme }) => theme.colors.textPrimary};
`