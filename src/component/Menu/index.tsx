import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Menu = (props:any) => {
    return (
        <div style={{ width: "100%" }} >
            <ul style={{ display: "flex", justifyContent: "end" }}>
                {props.data.map((elem:any, index:any)=>
                    (<li key={index} style={{ color: "black", listStyle: "none", padding: "0 18px 0 18px" }}>{elem.text}{elem.arrow ? <KeyboardArrowDownIcon  style={{fontSize:"17px", position:"absolute", marginTop:"4px",padding:"0 0 0 5px"}}/> : ""}</li>)
                )}

               

            </ul>
        </div>
    )
}

export default Menu