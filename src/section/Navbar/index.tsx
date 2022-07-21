import { AppBar, Toolbar, Tab, IconButton ,useMediaQuery,
    useTheme,
    Typography} from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import Menu from '../../component/Menu';
import MenuData from "../../data/Menu"

import DrawerComp from '../../component/MenuDrawer';
const useStyle = makeStyles({
    nav: {
        float: "right",
        color: "#f2f2f2",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
        fontSize: "17px"
    },

})



const Navbar = () => {
    const theme = useTheme();
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
    const classes = useStyle();
    {/*const [isMobile, setIsMobile] = useState(window.outerWidth < window.outerHeight)
    if (window !== null) {
        window.onresize = () => { setIsMobile(window.outerWidth < window.outerHeight) }

    } */}

    return (
        <AppBar sx={{ backgroundColor: "white" }}>
            <Toolbar >

                {isMatch ? (<> <DrawerComp data={MenuData} />  </>):( <Menu data={MenuData}></Menu>)}
              {/*  {isMobile ? <IconButton color="error"
                    aria-label="open drawer"
                    
                    edge="end" sx={{mr:2,display:"none"}}><MenuIcon style={{position: "absolute", right: "10", color: "black"}} /></IconButton> : <Menu menuList={data}></Menu>} */}
                     
                   
                  
            </Toolbar>
           
        </AppBar>

    )
}

export default Navbar