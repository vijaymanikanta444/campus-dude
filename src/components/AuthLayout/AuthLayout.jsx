import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import vietLogo from "../../assets/viet-logo.png";
import { clearAuthSession } from "../../authSession.js";
import {
  AvatarButton,
  AvatarTrigger,
  Brand,
  BrandCopy,
  BrandSubtitle,
  BrandTitle,
  Content,
  Header,
  Logo,
  Shell,
} from "./AuthLayout.styles.js";

function getInitials(account) {
  const label = account?.name ?? account?.username ?? "VIET";

  return (
    label
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "V"
  );
}

function AuthLayout({ children }) {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const activeAccount = instance.getActiveAccount() ?? accounts[0] ?? null;
  const [menuAnchor, setMenuAnchor] = useState(null);

  const initials = useMemo(() => getInitials(activeAccount), [activeAccount]);

  const isMenuOpen = Boolean(menuAnchor);

  const openMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  const handleProfile = () => {
    closeMenu();
    navigate("/profile");
  };

  const handleLogout = async () => {
    closeMenu();
    clearAuthSession();

    // it will logout the user from local only, but not from IDP
    instance.clearCache();

    navigate("/login", { replace: true });
  };

  return (
    <Shell>
      <Header>
        <Brand onClick={() => navigate("/")}>
          <Logo src={vietLogo} alt="VIET logo" />
          <BrandCopy>
            <BrandTitle>VIET</BrandTitle>
            <BrandSubtitle>
              Visakha Institute of Engineering & Technology
            </BrandSubtitle>
          </BrandCopy>
        </Brand>

        <>
          <AvatarTrigger onClick={openMenu} aria-label="Account menu">
            <AvatarButton
              alt={
                activeAccount?.name ?? activeAccount?.username ?? "VIET user"
              }
            >
              {isAuthenticated ? initials : "U"}
            </AvatarButton>
          </AvatarTrigger>

          <Menu
            anchorEl={menuAnchor}
            open={isMenuOpen}
            onClose={closeMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleProfile}>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </>
      </Header>

      <Content>{children}</Content>
    </Shell>
  );
}

export default AuthLayout;
