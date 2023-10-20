import Layout from '@/pages/layout'
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <Layout>
        <Container>
            <Grid container>
                <Grid item>
                    <Typography variant='h3' sx={{textAlign:'center'}}>
TNSTC
                    </Typography>
                    <Typography variant='h4' >
                    About
                    </Typography>
                    <Typography variant='body1' >
                    Tamil Nadu Skill Development Corporation was registered as a non-profit, Section 25 Company under Companies Act in the year 2013 to address the skill gap requirement and to expand the ambit of its functions. Initially, it was formed as Tamil Nadu Skill Development Mission in 2009 and later converted as Society followed by incorporation as a Company under the Companies Act.
                    </Typography>
                    
                    <Typography variant='body1' >
                        The components of the DAY-NULM are:

.Social Mobilization and Institution Development (SM&ID).

Capacity Building and Training (CB&T).

Employment through Skill Training and Placement (EST&P).

Self Employment Programme (SEP).

Support to Urban Street Vendors (SUH).

• Scheme of Shelter for Urban Homeless (SUSV), and an exclusive component, Innovation & Special Projects (1&SP).
                    </Typography>

         </Grid>
            </Grid>
        </Container>
    </Layout>
  )
}

export default index