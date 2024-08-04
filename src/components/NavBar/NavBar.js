import { StyledNavBar } from "./StyledNavBar";
import message from "../../assets/icons/Message.svg";
import arrow from "../../assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ $isdetails }) => {
    const navigate = useNavigate();
  return (
    <StyledNavBar $isdetails={$isdetails}>
      {$isdetails && (
        <div className="nav-icon" onClick={() => navigate(-1)}>
          <img src={arrow} alt="back" />
        </div>
      )}
      <div className="nav-icon">
        <img src={message} alt="message" />
      </div>
    </StyledNavBar>
  );
};
