import { AppBar, Toolbar, styled } from "@mui/material";
import logo from "../logo.png"

const Container = styled(AppBar)`
    background: #121316;
    height: 9vh;
`

const Header = () =>{
    return(
        <Container position="static">
            <Toolbar
            style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: 600,
                padding: 5
            }}
            >
            <img
            style={{
                width: 40,
                padding: 10
            }}
            src = {logo} alt="logo" />
            ScriptSmith
            </Toolbar>
        </Container>
    )
}
export default Header;