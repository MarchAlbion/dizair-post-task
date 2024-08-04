import { StyledMain } from "./StyledMain";
import { Profile } from "../Profile/Profile";
import { useState } from "react";
import { ToggleDataType } from "../ToggleDataType/ToggleDataType";


export const Main = () => {
  const [option, setOption] = useState("photos");

  const handleSetOption = (option) => {
    setOption(option);
  };
  return (
    <StyledMain>
      <Profile option={option} handleSetOption={handleSetOption} />
      <ToggleDataType option={option} />
    </StyledMain>
  );
};
