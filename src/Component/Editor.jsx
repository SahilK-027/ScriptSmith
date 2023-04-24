import { useState } from "react";
import { Box , styled} from "@mui/material"
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor} from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css.js';
import "../App.css"


const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`
const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
    justify-content: space-evenly;
    align-items: center;
`
const Header = styled(Box)`
    background: #060606;
    display: flex;
    color: #aaaebc;
    justify-content: space-between;
    align-items: center;
    font-weight: 700px;
`
const Editor = ({heading, icon, color, value, onChange}) =>{
    const [open, setOpen] = useState(true);
    const handleChange = (editor, data, value) =>{
        onChange(value);
    }
    return(
        <>
            <Container
                style={open ? null : {flexGrow: 0}}
            >
                <Header>
                    <Heading>
                        <Box 
                            component="span"
                            style={{
                                background: color,
                                height: 20,
                                width: 20,
                                display: "flex",
                                placeContent: 'center',
                                borderRadius: 5,
                                marginRight: 5,
                                paddingBottom: 2,
                                color: "black",
                                alignItems: "center",
                                justifyContent:"center",
                                padding: 3,
                                fontWeight: 700
                            }}
                        >
                        {icon}
                        </Box>
                        {heading}
                    </Heading>
                    <CloseFullscreenIcon
                        onClick ={()=> setOpen(prevState => !prevState)}
                        style ={{
                            paddingRight: 20
                        }}
                        fontSize="small"
                    />
                </Header>
                <ControlledEditor 
                    className="controlled-editor" 
                    value= {value}
                    onBeforeChange={handleChange}
                    options ={{
                        theme: "material",
                        lineNumbers: true
                    }}
                />
            </Container>
        </>
    )
}
export default Editor