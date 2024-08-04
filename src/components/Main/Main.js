import { StyledMain } from "./StyledMain";
import { Profile } from "../Profile/Profile";
import { useEffect, useState } from "react";
import { ToggleDataType } from "../ToggleDataType/ToggleDataType";
import { useSearchParams } from "react-router-dom";

export const Main = () => {
  const [option, setOption] = useState("photos");
  const [searchParams] = useSearchParams()

  const handleSetOption = (option) => {
    setOption(option);
  };

  useEffect(() => {
    const defaultTab = searchParams.get('tab') || 'photos';
    setOption(defaultTab);
  }, []); 
  return (
    <StyledMain>
      <Profile option={option} handleSetOption={handleSetOption} />
      <ToggleDataType option={option} />
    </StyledMain>
  );
};
