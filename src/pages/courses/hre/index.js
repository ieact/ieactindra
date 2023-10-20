import Layout from "@/pages/layout";
import { Container, List, ListItem, Typography } from "@mui/material";
import React from "react";

function index() {
  return (
    <div>
      <Layout>
        <Container>
            <Typography variant="h3" sx={{textAlign:'center'}}>
          Handset Repair Engineering
            </Typography>
          <Typography>
            <List>
              <ListItem>• Sector:TELECOM</ListItem>
              <ListItem>• Sub Sector: Handset</ListItem>
              <ListItem>• Industry: Construction Electrical Works</ListItem>
              <ListItem>• Reference ID: TEL/Q2201</ListItem>
              <ListItem>Revised: NCO-2004/7137.2</ListItem>
            </List>
          </Typography>
          <Typography variant="body1">
         Brief Job Description : Handset repair engineer is responsible for performing hand set repair including hardware and software components and testing the handset for a dequacy post repair
          </Typography>
          <Typography variant="body1">Personal Attributes: This job requires the individual to be analytical and be able to handle high pressure situations to successfully perform the assigned responsibilities. He should have basic written and oral communication skills and should be able to apply practical judgement to successfully perform the assigned responsibilities.
          </Typography>
         
        </Container>
      </Layout>
    </div>
  );
}

export default index;
