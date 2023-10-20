import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from '../layout'

const About = () => {
  return (
    <Layout>
    <Container>
        <Grid container>
            <Grid item xs={12}>
              <Box sx={{p:2}}>
                <Typography variant='h3' sx={{textAlign:'center'}}>
                    About Us
                </Typography>
                </Box>
                <Box sx={{p:2,justifyContent:'center'}}>
                <Typography variant="h4">
                Introduction
                </Typography>


<Typography variant='subtitle2'>    
Indra Education and Foundation Skill Development Program provides youth with leadership, social, communication, computers and basic life skills.
</Typography><Typography variant='body1'> 
Provides a variety of personal skill development experiences including
Short-term training in the garment industry is provided to youth between the ages of 18 to 45 years. After completing the training program, dedicated placement
The group ensures that the candidates get employment in various textile sectors and also facilitates them for self-employment. Also, work
To expand the scope of opportunities, increase the recruitment partner support system and new employment opportunities
Investigate A typical job mapping activity is done at the central level.
Indira Skill Trust works with NSDC, SSCs and State, for skill development and
Central Government schemes in the Ministry of Entrepreneurship have got consultative status pan India
To provide necessary skills to thousands of youth.
The Institute's unique training approach provides industry-required, employability-linked appropriate skill training at pace, scale and standards.
Well designed to deliver. Pradhan Mantri Kaushal Kendra (PMKVY) and DDU-GKY are among the most important partners for the government's flagship programme.
Skills Foundation is one.
</Typography>
<Typography variant='h4'>
Purpose of Skill Development Programmes
</Typography>
<Typography variant='body1'>
The main mission of Sikaram Skills Foundation in the field of education is to provide marketable skills to the many unemployed youth in India. In JET skills
Ensures holistic development of trainees. Along with technical skills, JET skills training focuses on other dimensions of skill development—
Numerical Ability, Science, Basic Information Technology, Career Orientation, Communication, Soft Skills & Personality Development and Work Ethics and
Gives special importance. Considering the specific requirement of Safety, Health and Environment (SHE) sector.
We firmly believe that future training includes the skills, abilities and learning attitudes needed to succeed in the future.
A growing international movement focused on the skills students need to master in preparation for success in a rapidly changing, digital society
This is in part. Many of these skills are related to deep learning, such as analytical reasoning, complex problem solving, and teamwork
Based on mastering skills. These skills differ from traditional academic skills because they are not primarily based on content knowledge.
                </Typography>
                </Box>
            </Grid>
        </Grid>
    </Container>
    </Layout>
  )
}

export default About