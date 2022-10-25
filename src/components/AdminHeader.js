import React, { useState,useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import logo from "../../asset/logo.png";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
import "./AdminHeader.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {FaBuffer} from "react-icons/fa"
import {GrAddCircle} from "react-icons/gr"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { borderBottom } from "@mui/system";
import AddProperty from "./addProperty/AddProperty";
const drawerWidth = 250;
let acc;
function AdminHeader(props) {
  const { window } = props;
let [isColor, setIsColor] = useState("Add Property")
  const drawer = (
    <div className="stakenmsColor1" style={{ color: "#000" }}>
      <Toolbar style={{ paddingTop: "8px", paddingBottom: "10px" , backgroundColor: "#ffffff" }} className=" d-flex justify-content-center">
        <img src="assets/marhaba estate-01.png" width="80px" />
      </Toolbar>
      <br />
      <div className="" style={{ marginLeft: "30px" }} >      
    
      </div>

      
      <List>
       
          <ListItem button href="#deshborad" key="Dashboard"
          
          >
            <ListItemIcon className=" d-flex justify-content-center">
              <TuneIcon style={{ color: "#000" }} className="arrow-up"/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button key="Messages" primaryTypographyProps={{fontSize: '15px'}}>
            <ListItemIcon className=" d-flex justify-content-center">
              <MailOutlineIcon style={{ color: "#000" }} className="arrow-up"/>
            </ListItemIcon>
            <ListItemText primary="Messages" style={{fontSize: '10px'}}/>
          </ListItem>
          <ListItem button key="My Properties"
          
          >
            <ListItemIcon className=" d-flex justify-content-center">
              <FaBuffer style={{ color: "#000" }} className="arrow-up"/>
            </ListItemIcon>
            <ListItemText primary="My Properties" primaryTypographyProps={{fontSize: '15px'}}/>
          </ListItem>

        <ListItem button key="Add Property"
        onClick={()=>setIsColor("Add Property")}
        className={isColor == "Add Property" ? "staking-btn_active" : "staking-btn"}
        >
          <ListItemIcon className=" d-flex justify-content-center">
            <GrAddCircle style={{ color: "#000" }} className="arrow-up"/>
          </ListItemIcon>
          <ListItemText primary="Add Property"  primaryTypographyProps={{fontSize: '15px'}}/>
        </ListItem>

        <ListItem button key="My Profile">
          <ListItemIcon className=" d-flex justify-content-center">
            <PersonOutlineOutlinedIcon style={{ color: "#000" }} className="arrow-up"/>
          </ListItemIcon>
          <ListItemText primary="My Profile"  primaryTypographyProps={{fontSize: '15px'}}/>
        </ListItem>

        <ListItem button key="Logout">
          <ListItemIcon className=" d-flex justify-content-center">
            <LogoutIcon style={{ color: "#000" }} className="arrow-up"/>
          </ListItemIcon>
          <ListItemText primary="Logout"  primaryTypographyProps={{fontSize: '15px'}}/>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "#ffffff", height: "80px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ color: "white", display: "flex" }}>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        
      >
        <Drawer 
          container={container}
          variant="temporary"
          
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <AddProperty/>
      </Box>
    </Box>
  );
}

AdminHeader.propTypes = {

  window: PropTypes.func,
};

export default AdminHeader;