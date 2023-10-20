import Layout from '@/pages/layout'
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const index = () => {
  return (
   <Layout>
    <Container>
    <Grid container>
        <Grid item >
           
        <Typography variant='h3' textAlign={'center'} sx={{m:2}}>
            NSDC
        </Typography>
           
            <Typography variant='body1' >
            National Skill Development Corporation (NSDC) is a not-for-profit public limited company incorporated on July 31, 2008 under section 25 of the Companies Act, 1956 (corresponding to section 8 of the Companies Act, 2013), NSDC was set up by Ministry of Finance as Public Private Partnership (PPP) model. The Government of India through Ministry of Skill Development & Entrepreneurship (MSDE) holds 49% of the share capital of NSDC, while the private sector has the balance 51% of the share capital. 
            </Typography>
            <br/>
             <Typography variant='body1' >
NSDC aims to promote skill development by catalyzing creation of large, quality and for-profit vocational institutions. Further, the organisation provides funding to build scalable and profitable vocational training initiatives. Its mandate is also to enable support system which focuses on quality assurance, Information systems and train the trainer academies either directly or through partnerships. NSDC acts as a catalyst in skill development by providing funding to enterprises, companies and organizations that provide skill training. It also develops appropriate models to enhance, support and coordinate private sector initiatives. The differentiated focus on 21 sectors under NSDC's purview and its understanding of their viability will make every sector attractive to private investment.

</Typography>
<br/>
<Typography variant='body1' >
NSDC operates under a Public Private Partnership (PPP) model. The Government of India through the Ministry of Skill Development & Entrepreneurship (MSDE) owns 49% of the share capital, while the private sector owns 51% According to the NSDC's Board Report, the government is the largest shareholder and corporation controller, and the private holders are 10 business associations or confederations including the Confederation of Indian Industry (CII), Federation of Indian Chambers of Commerce and Industry (FICCI) and National Association of Software & Service Companies (NASSCOM) each with 5.1% share capital. Under the aegis of MSDE, NSDC has collaborated with central and state governments, industry, non-profit organisations and academia to synergise and accelerate the skilling efforts.

</Typography>


           

        </Grid>
    </Grid></Container>
   </Layout>
  )
}

export default index