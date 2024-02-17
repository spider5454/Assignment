import Header from "./MUI_Component/Header";
// import Mui from "./MUI_Component/Mui";
import Side from "./MUI_Component/Side";

import Mid from "./MUI_Component/Mid";
import Rightside from "./MUI_Component/Rightside";
import { Box, Stack } from "@mui/material";
function App() {
  return (
    <>
      {/* <Mui/> */}

      <Box>
        <Header />
        <Stack direction="row"  gap={2}>

          <Side />
          <Mid />
          <Rightside />

        </Stack>
      </Box>
    </>
  );
}

export default App;
