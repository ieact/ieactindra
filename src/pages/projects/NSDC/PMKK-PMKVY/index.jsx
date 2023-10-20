import Layout from "@/pages/layout";
import { Container, List, Typography } from "@mui/material";
import React from "react";

const PMKK = () => {
  return (
    <>
    <Layout>

  
      <Container>
        <Typography variant="h4" component="div">
          PMKK - PMKVY
        </Typography>
        <Typography variant="subtitle1">
          Pradhan Minister Kaushal Kendra
        </Typography>
        <Typography variant="body1">
          Vocational training should be made ambitious to make India the skills
          capital of the world. Similarly, skill development and
          entrepreneurship The Ministry (MSDE) intends to establish visible and
          interesting Model Training Centers (MTCs) in every district of the
          country. Jairam Education Trust is the implementing agency of the
          scheme.
        </Typography>
        <Typography variant="subtitle1">
          Our training centers consider the following:
        </Typography>
        <Typography variant="body1">
          <List>
            • Develop criteria that demonstrate the aspirational value of
            competency-based skill development training.
          </List>
          <List>
            • Focus on the elements of quality, sustainability and communication
            with stakeholders in the process of delivering capabilities.
          </List>
          <List>
            • Change from a mandate-driven footloose model to a sustainable
            enterprise model.
          </List>
        </Typography>
      </Container>
      </Layout></>
  );
};

export default PMKK;
