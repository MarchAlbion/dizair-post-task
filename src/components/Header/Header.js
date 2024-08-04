import { NavBar } from "../NavBar/NavBar";
import { StyledHeader } from "./styledHeader";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isdetails = location.pathname.split('/').includes('details')
  return (
    <StyledHeader $isdetails={isdetails}>
      <NavBar $isdetails={isdetails} />
    </StyledHeader>
  );
};
