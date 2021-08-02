
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export const Header = () => {
  const displayDesktop = () => {
    return <Toolbar>{logo}</Toolbar>;
  };

  const logo = (
    <Typography variant="h6" component="h1">
      Logo
    </Typography>
  );

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}