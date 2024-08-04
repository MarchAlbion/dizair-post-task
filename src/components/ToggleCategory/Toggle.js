import { StyledToggleContainer, StyledToggleOption } from "./StyledToggle";

export const Toggle = ({option, handleSetOption}) => {
  return (
    <StyledToggleContainer>
      <StyledToggleOption $isActive={option === "photos"} onClick={() => handleSetOption('photos')}>Photos</StyledToggleOption>
      <StyledToggleOption $isActive={option === "posts"} onClick={() => handleSetOption('posts')}>Posts</StyledToggleOption>
    </StyledToggleContainer>
  );
};
