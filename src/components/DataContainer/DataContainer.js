import { StyledDataContainer, StyledUser } from "./StyledDataContainer";
import avatar from "../../assets/images/avatar.png";

export const DataContainer = ({children, onClick}) => {
  return (
    <StyledDataContainer onClick={onClick}>
      <StyledUser>
        <img src={avatar} alt="avatar"/>
        <div>
          <div id="name">Catherine Surname</div>
          <div id='username'>@Catherine13</div>
        </div>
      </StyledUser>
      {children}
    </StyledDataContainer>
  );
};