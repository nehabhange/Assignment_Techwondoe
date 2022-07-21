import { Grid } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import Section1 from "../../data/Section1"
const TextComp = (props: any) => {

    return (

        <Grid item xs={12} sm={12} md={4} >
            <Grid container>
                <Grid item xs={1} sm={1} md={3} style={{ color: "orange" }}> <div style={{ textAlign: "center" }}><CheckIcon /></div> </Grid>
                <Grid item xs={11} sm={11} md={9}>
                    <div style={{ fontWeight: "700" }}>{props.data.title}</div>
                    <div>{props.data.info}</div>
                </Grid>
            </Grid>
        </Grid>
    )
}
const index = () => {

    return (
        <div style={{ padding: "10 25 10 25" }}>
            <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "10%", marginBottom: "10%" }}>

                <div style={{ textAlign: "center" }}>
                    <h2>Why choose us ?</h2>
                    <p>We have decades of experience,having successfully recurited across the <br></br> globe for many years. </p>
                </div>
                <div>
                    <Grid container spacing={6} sx={{ marginTop: "3%" }} >
                        {Section1.map((e, index) => {
                            return (<TextComp data={e} key={index} />)
                        })}
                    </Grid>
                </div>
            </div>



        </div>
    )
}

export default index