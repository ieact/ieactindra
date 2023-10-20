import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Layout from "../layout";
import { Button, Container, Grid, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";

const AdmissionForm = () => {
    const [studied, setStudy]= React.useState()
    const studyInfo =["12","Diploma","UG","PG","Phd"]
  return (
    <Layout>
        <Container>
      <div>
        <Grid>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
            "& .MuiButton-root": { m: 1, width: "35ch" },
           
          }}
          noValidate
          autoComplete="off"
        >
            <Typography variant="h3">
                Application Form
            </Typography>
          <div>
            <Stack direction={"column"}>
              <TextField required id="outlined-required" label="Full name" />
              <TextField
                required
                id="outlined-email"
                label="Email"
                type="Email"
              />
              <TextField required id="outlined-phone" label="Phone-number" />
              <InputLabel id="demo-simple-select-label" sx={{m:1}}>Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={studied}
          label="Age"
          onChange={setStudy}
          sx={{width:'35ch',m:1}}
        >
            {studyInfo.map((studied)=>(
                <MenuItem value={studied} key={studied}>{studied}</MenuItem>
            ))}
      
        </Select>
              <TextField id="outlined-number" label="message" type="text" />
              <Button variant="contained">Submit</Button>
            </Stack>
          </div>
        </Box>
        </Grid>
      </div>
      </Container>
    </Layout>
  );
};

export default AdmissionForm;
