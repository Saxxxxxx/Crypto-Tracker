import React from "react";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/system";
import {
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
const title = {
  flex: 1,
  color: "#868d88",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  cursor: "pointer",
};
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    type: "dark",
  },
});
const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              style={title}
              variant="h6"
            >
              Crypto Tracker
            </Typography>
            <Select
              variant="filled"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 80, height: 50, marginRight: 15, color: "white" }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={`USD`}>USD</MenuItem>
              <MenuItem value={`MYR`}>MYR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
