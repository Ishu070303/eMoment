import React from "react";
import { IoMenu } from "react-icons/io5";
import {
  Box,
  Button,
  Divider,
  Link,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

const MobileNav = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          marginBottom: "2rem",
          marginTop: "1rem",
        }}
        variant="h4"
      >
        Hello User
      </Typography>
      {[
        "ACCOUNT",
        "HOT DEALS",
        "WISHLIST",
        "COMPARE",
        "AFFILIATE ZONE",
        "LOGIN / REGISTER",
      ].map((text, index) => (
        <div className="menu-div">
          <Link key={text} className="menu-link">
            {text}
          </Link>
          <Divider style={{ backgroundColor: "black", marginBottom: "1rem" }} />
        </div>
      ))}
    </Box>
  );

  return (
    <section className="sm:hidden">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className="material-ui_menubutton"
          >
            <IoMenu />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </section>
  );
};
export default MobileNav;
