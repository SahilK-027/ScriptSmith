import { useContext, useState, useEffect } from "react"
import { Box, styled } from "@mui/material"
import { DataContext } from "../Context/DataProvider"

const Container = styled(Box)`
    height: 41vh;
    background: #121316;
`

const Result = () =>{
    const [src, setSrc] = useState('');

    const {html, css, js} = useContext(DataContext);
    const srcCode = `
    <html>
        <head>
            <style>
            *{
                color: #808080;
            }
            ${css}
        </style>
        </head>
        
        <body>
        ${html}
        <script>${js}</script>
        </body>
    </html>
    `
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrc(srcCode);
        }, 700)

        return () => clearTimeout(timeout);
    }, [html, css, js])
    return (
        <Container>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox="allow-scripts"
                width= "100%"
                height= "100%"
                allowtransparency="true"
                frameBorder = "0"
                style={{
                    background: "#121316"
                }}
            />
        </Container>
    )
}
export default Result