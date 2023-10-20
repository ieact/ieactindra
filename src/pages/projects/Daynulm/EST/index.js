import Layout from "@/pages/layout";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Layout>
      <Container>
        <Grid container>
          <Grid item>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              TNSTC
            </Typography>
            <Typography variant="h4">About</Typography>
            <Typography variant="body1">
              National Urban Livelihoods Mission (NULM) was launched by the
              Ministry of Housing and Urban Poverty Alleviation (MHUPA),
              Government of India in 23rd September, 2013 by replacing the
              existing Swarna Jayanti Shahari Rozgar Yojana (SJSRY).The NULM
              will focus on organizing urban poor in their strong grassroots
              level institutions, creating opportunities for skill development
              leading to market-based employment and helping them to set up
              self- employment venture by ensuring easy access to credit. The
              Mission is aimed at providing shelter equipped with essential
              services to the urban homeless in a phased manner. In addition,
              the Mission would also address livelihood concerns of the urban
              street vendors. For more details visit the NUUM Website
              Objectives: The broader objective of the Employment through Skills
              Training & Placement (EST&P) Program is- To provide an asset to
              the urban poor in the form of skills for sustainable livelihood To
              increase the income of urban poor through structured,
              market-oriented certified courses that can provide salaried
              employment and/or self- employment opportunities which will
              eventually lead to better living standards and alleviation of
              urban poverty on a sustainable basis Ensure inclusive growth with
              increased contribution of skilled urban poor to the National
              Economy. Certification: Each socostul candidate undertaking
              training under EST&P component of NULM should be awarded a
              certificate issued by a competent agency which has acceptability
              in the industry. Assessment of the skills gained should be done by
              an independent certifying agency. The training agency should not
              be entrusted with the assessment and certification of the trainees
              to ensure objective assessment, SSC NASSCOM is one the
              Certification Agency (CA) stupanelled for ESTAP program
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default index;
