import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const PersonalityDash = () => {
  return (
    <Box>
      <NavBar link="/PersonalityDash" />
      <Box>
        <BtnRouting
          btnName="Quote Clear"
          navigateTo="PersonalityQuoteClear"
          backgroundColor="#0077ba"
          textColor="white"
        />
      </Box>
    </Box>
  );
};

export default PersonalityDash;
