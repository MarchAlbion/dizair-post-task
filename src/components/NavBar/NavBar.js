import { StyledNavBar } from "./StyledNavBar";
import message from "../../assets/icons/Message.svg";
import arrow from "../../assets/icons/arrow.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = ({ $isdetails }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname.includes("photo")) {
      navigate("/?tab=photos");
    } else {
      navigate("/?tab=posts");
    }
  };
  return (
    <StyledNavBar $isdetails={$isdetails}>
      {$isdetails && (
        <div className="nav-icon" onClick={() => handleClick()}>
          <img src={arrow} alt="back" />
        </div>
      )}
      <div className="nav-icon">
        <img src={message} alt="message" />
      </div>
    </StyledNavBar>
  );
};
