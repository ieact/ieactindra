import Layout from "@/pages/layout";
import { Container, List, ListItem, Typography } from "@mui/material";
import React from "react";

function index() {
  return (
    <div>
      <Layout>
        <Container>
            <Typography variant="h3" sx={{textAlign:'center'}}>
           Assistant Electrician
            </Typography>
          <Typography>
            <List>
              <ListItem>• Sector:Construction</ListItem>
              <ListItem>• Sub Sector: Real Estate and Infrastructure Construction</ListItem>
              <ListItem>• Industry: Construction Electrical Works</ListItem>
              <ListItem>• Reference ID: CON/Q0602</ListItem>
              <ListItem>Revised: NCO-2004/7137.2</ListItem>
            </List>
          </Typography>
          <Typography variant="body1">
          This job role establishes temporary lighting arrangement required for construction activities and basic electrical wiring in temporary/permanent structures.
          </Typography>
          <Typography variant="body1">Brief Job Description: Installation, repair and maintenance of temporary LV electrical connections at construction sites and residential and commercial buildings.
Electrician's Assistant Level-4 Electrician or above for installation, repair and maintenance of permanent connections. Individual LV is single
Appropriate selection and use of phase wiring and skillful use of hand and power tools
          </Typography>
          <Typography variant="body1">Personal Attributes: The job holder is expected to be physically fit and able to withstand extreme conditions while working on site
Able to work in locations; Familiar with basic electrical works functions and functions. Person can work within a team, variety related to electrical work Handle tools and materials safely and sensibly and take responsibility for own work.
          </Typography>
        </Container>
      </Layout>
    </div>
  );
}

export default index;
