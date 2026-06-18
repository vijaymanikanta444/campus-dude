import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import styled from 'styled-components'

export const Shell = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 28px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(6, 11, 22, 0.72);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  @media (max-width: 640px) {
    padding: 16px 18px;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
`

export const Logo = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
  flex: 0 0 auto;
`

export const BrandCopy = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const BrandTitle = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.82rem;
`

export const BrandSubtitle = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    display: none;
  }
`

export const AvatarTrigger = styled(IconButton)`
  width: 52px !important;
  height: 52px !important;
  padding: 0 !important;
  flex: 0 0 auto !important;
`

export const AvatarButton = styled(Avatar)`
  width: 44px !important;
  height: 44px !important;
  background: linear-gradient(135deg, #93c5fd, #f472b6) !important;
  color: #071120 !important;
  font-weight: 800 !important;
`

export const Content = styled.main`
  flex: 1;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.page};
  box-sizing: border-box;
`