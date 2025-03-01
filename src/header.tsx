import React from "react";
import { AppBar, Toolbar, Typography, Box, ListItem, ListItemText } from "@mui/material";

const Header: React.FC = () => {

  return (
    <AppBar position="fixed"> {/* Fixed header at top */}
      <Toolbar>
        <Typography variant="h6" sx={{ width: "250px"}}>
          Tech Stack World
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <ListItem sx={{ cursor: "pointer", width: "150px" }}>
            <ListItemText primary="Tools" />
          </ListItem>
          <ListItem sx={{ cursor: "pointer", width: "150px"  }}>
            <ListItemText primary="Stacks" />
          </ListItem>
          <ListItem sx={{ cursor: "pointer", textAlign: "right" }}>
            <ListItemText primary="Login" />
          </ListItem>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
