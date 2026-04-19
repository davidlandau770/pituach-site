import type { CSSProperties, FC, ReactNode } from "react";
import { NavLink as CustomNavLink } from "react-router-dom";
type NavLinkProps = {
  to: string;
  children: ReactNode;
  color?: CSSProperties["color"];
  style?: CSSProperties;
};

const NavLink: FC<NavLinkProps> = ({
  to,
  children,
  color = "white",
  style,
}) => {
  return (
    <CustomNavLink to={to} style={{ textDecoration: "none", color, ...style }}>
      {children}
    </CustomNavLink>
  );
};

export default NavLink;
