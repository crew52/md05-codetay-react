import HeaderTop from "../HeaderTop";
import {Grid} from "@mui/material";
import {Outlet} from "react-router"
import SideBar from "../SideBar";

function Main() {
    return(
        <>
            <HeaderTop/>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <SideBar/>
                </Grid>
                <Grid size={8}>
                    <Outlet/>
                </Grid>
            </Grid>
        </>
    )
}
export default Main