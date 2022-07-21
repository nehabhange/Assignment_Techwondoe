import React from 'react'
import { Grid ,Button } from '@mui/material'
const index = () => {
    return (
    <div style={{background:"#fcf2e3", border:"0.1px solid #fcf2e3" }}>
        <div  style={{ marginLeft: "10%", marginRight: "10%", marginTop: "10%", marginBottom: "10%" }}>
        <Grid container spacing={6} >
            <Grid item xs={12} sm={12} md={6}><img width="100%" height="85%" style={{borderRadius:"3%",marginTop:"4%"}} src="https://cdn.pixabay.com/photo/2022/07/13/18/34/grassland-7319829_1280.jpg" alt=""/></Grid>
            <Grid item xs={12} sm={12} md={6}><div>
                <div style={{color:"orange"}}>
                    Our team
                </div>
                <div> <h3>A team you can trust</h3></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum eros sit amet est mollis varius non scelerisque lorem. Morbi sapien orci, euismod ut lacus non, tincidunt porta nunc. Vestibulum facilisis mi laoreet malesuada aliquam. Fusce scelerisque, orci in tempor placerat, dolor neque porta orci, eget cursus augue velit vel ipsum. Suspendisse potenti. Maecenas pulvinar faucibus augue in hendrerit. Aliquam non metus blandit, ultrices neque a, congue mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida mi quis leo aliquet, et egestas ex pellentesque. In dapibus ipsum ut turpis tempor rutrum</p></div>
                <div><Button  style={{textTransform: "none",background:"orange",color:"white"}}>Learn More</Button></div>
                </div></Grid>
        </Grid>
        </div>
    </div>
    )
}

export default index