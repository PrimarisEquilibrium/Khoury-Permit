import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import Home from "@mui/icons-material/Home";
import { useState } from "react";
import "../styles/navbar.css";

function Navbar({ active }) {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <a href="/" style={{ color: "black" }}>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItem>
          <a href="/contact" style={{ color: "black" }}>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </a>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <nav className="nav">
      <div className="logo">
        <a href="/" className="logo-text">KHOURY DESIGN AND PERMIT DRAWINGS</a>
      </div>
      <div className="nav-options">
        {active === "home" ? (
          <a href="/" className="nav-btn active">
            Home
          </a>
        ) : (
          <a href="/" className="nav-btn">
            Home
          </a>
        )}
        {active === "contact" ? (
          <a href="/contact" className="nav-btn active">
            Contact
          </a>
        ) : (
          <a href="/contact" className="nav-btn">
            Contact
          </a>
        )}
      </div>
      <div className="nav-options-mobile">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </nav>
  );
}

export default Navbar;
