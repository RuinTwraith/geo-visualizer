import React, { Component } from "react";
import Logo from "../logo.svg";
import Box from "@material-ui/core/Box";

class Header extends Component {
  render() {
    return (
      <div>
        <Box style={{ background: "#00293B", padding: "15px" }}>
          <img src={Logo} alt="Logo" width={200} />
        </Box>

        <Box
          className="nav"          
          style={{ background: "#1B3D4B", padding: "12px", color: "#fff" }}
        >
          <Box
          display="flex"
          justifyContent="center"
          justifyContent="space-evenly"
          width="50%"
          margin="auto"
          >
            <Box pr={4} p={0.5}>
              Mountains
            </Box>
            <Box pr={4} p={0.5}>
              Beach
            </Box>
            <Box pr={4} p={0.5}>
              Roads
            </Box>
            <Box pr={4} p={0.5}>
              Landscape
            </Box>
            <Box pr={4} p={0.5}>
              Waterfalls
            </Box>
            <Box pr={4} p={0.5}>
              Rivers
            </Box>
            <Box pr={4} p={0.5}>
              Deserts
            </Box>
            <Box p={0.5}>Temples</Box>
          </Box>
        </Box>
      </div>
    );
  }
}

export default Header;
