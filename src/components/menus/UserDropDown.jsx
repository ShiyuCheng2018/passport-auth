import React, {useState} from "react";
import {withStyles} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import {MoreVert, Home, AccountCircle} from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import history from "../../history";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ButtonList from "../buttons/ButtonList";


const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})(props => (
    <Menu elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{vertical: "bottom", horizontal: "center"}}
          transformOrigin={{vertical: "top", horizontal: "center"}}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme=>({
    root: {
        "&:foces": {
            backgroundColor: "var(--primary-red)",
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem);

const  UserDropDown = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return(
        <div style={{float: "right"}}>
            <IconButton href={""} style={{color: "#fff", padding: "13px 12px"}} onClick={handleClick}>
                <MoreVert/>
            </IconButton>


            <StyledMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem onClick={()=>history.push('/')}>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </StyledMenuItem>
                <StyledMenuItem onClick={()=>history.push('/profile')}>
                    <ListItemIcon>
                        <AccountCircle/>
                    </ListItemIcon>
                    <ListItemText primary={"Profile"}/>
                </StyledMenuItem>
                <ButtonList/>
            </StyledMenu>
        </div>
    )

};

export default UserDropDown;