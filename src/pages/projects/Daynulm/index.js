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
              To reduce poverty and vulnerability of the urban poor households
              by enabling them to access gainful self employment and skilled
              wage employment opportunities, resulting in an appreciable
              improvement in their livelihoods on a sustainable basis, through
              building strong grassroots level institutions of the poor. The
              mission would aim at providing shelters equipped with essential
              services to the urban homeless in a phased manner. In addition,
              the mission would also address livelihood concerns of the urban
              street vendors by facilitating access to suitable spaces,
              institutional credit, social security and skills to the urban
              street vendors for accessing emerging market opportunities.
            </Typography>
            <Typography variant="subtitle1">
              The components of the DAY-NULM are:
            </Typography>
            <Typography variant="body1">
              •Social Mobilization and Institution Development (SM&ID). Capacity
              Building and Training (CB&T). Employment through Skill Training
              and Placement (EST&P). Self Employment Programme (SEP). Support to
              Urban Street Vendors (SUH). • Scheme of Shelter for Urban Homeless
              (SUSV), and an exclusive component, Innovation & Special
              Projects (1&SP).{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default index;
