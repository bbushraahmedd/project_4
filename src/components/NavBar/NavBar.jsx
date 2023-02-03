import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function NavBar (){
    return(
        <AppBar position="static" color="success">
            <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
            growth
            </Typography>
            <Button color="inherit">Logout</Button>
            {/* eventually include avatar icon and auth and logout */}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;