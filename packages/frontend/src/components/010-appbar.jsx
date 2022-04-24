import React from "react";

import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";

function AppBar(props) {
  return (
    <div>
      <MuiAppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phone catalog
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}

export default AppBar;
