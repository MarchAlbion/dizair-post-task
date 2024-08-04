import {
  StyledImageContainer,
  StyledInfo,
  StyledInfoContainer,
  StyledInfoDescription,
  StyledNickname,
  StyledProfileButton,
  StyledProfileСontainer,
} from "./StyledProfile";

import avatar from "../../assets/images/avatar.png";
import { Toggle } from "../ToggleCategory/Toggle";



export const Profile = ({option, handleSetOption}) => {

  return (
    <StyledProfileСontainer>
      <StyledImageContainer>
        <img alt="avatar" src={avatar} />
      </StyledImageContainer>
      <StyledInfoContainer>
        <div>
          <StyledInfo $weight="700">1k</StyledInfo>
          <StyledInfo $weight="400">Followers</StyledInfo>
        </div>
        <div>
          <StyledInfo $weight="700">342</StyledInfo>
          <StyledInfo $weight="400">Following</StyledInfo>
        </div>
      </StyledInfoContainer>
      <StyledNickname>@Catherine13</StyledNickname>
      <StyledInfoDescription>
        My name is Catherine. I like dancing in the rain and travelling all
        around the world.
      </StyledInfoDescription>
      <div id="profile-buttons">
        <StyledProfileButton>Follow</StyledProfileButton>
        <StyledProfileButton>Message</StyledProfileButton>
      </div>
      <Toggle option={option} handleSetOption={handleSetOption} />
    </StyledProfileСontainer>
  );
};
