import React from 'react'
import { Grid ,Button} from '@mui/material'
const index = () => {
  return (
    <div><div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "10%", marginBottom: "10%" }}>
        <Grid container>
            <Grid item xs={8} sm={8} md={8} ><div>Latest News</div>           </Grid>
            <Grid item  xs={4} sm={4} md={4}> <Button>View all</Button></Grid>

        </Grid>
        <Grid container>
            <Grid item xs={12} sm={12} md={4}><div>Latest News</div>           </Grid>
            <Grid item xs={12} sm={12} md={4} > <Button>View all</Button></Grid>
            <Grid item xs={12} sm={12} md={4}> <Button>View all</Button></Grid>

        </Grid>
        
        </div></div>
  )
}

export default index