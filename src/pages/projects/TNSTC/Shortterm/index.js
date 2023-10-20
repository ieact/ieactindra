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
Short Term Training
                    </Typography>
                   
                    <Typography variant='body1' >
                    STT component imparted at Sigaram Skill Foundation (TC) is expected to benefit candidates of Indian nationality who are either school/college dropouts or unemployed. Apart from providing training according to the National Skills Qualification Framework (NSQF), TCs also impart training in soft skills, entrepreneurship, financial and digital literacy. Upon successful completion of assessment, candidates are provided placement assistance by training providers.

                    </Typography>
                    
                    <Typography variant='body1' >
                    The Short-Term Training (STT) shall be implemented under both Central and State component of the scheme. STT shall have provision for both fresh skilling for trainees who are first time learners and reskilling for the trainees/existing workforce who have already undergone formal/informal skilling and need additional skill sets
    </Typography>
    <Typography variant='body1' >
    Apart from providing training according to the National Skills Qualification Framework (NSQF), additional training shall also be imparted in English, Employability & Entrepreneurship (EEE) modules. Process shall be initiated for imparting add-on Bridge courses and language courses for making schemes compatible to international standards and requirements. This will enhance the potential for international employment of the Indian youth
    </Typography>


         </Grid>
            </Grid>
        </Container>
    </Layout>
  )
}

export default index