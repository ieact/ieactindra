import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Carousel,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Image from "next/image";
import styles from "./homepage.module.css";
import React from "react";



const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

const HomePage = () => {
  const sscImg =[
    "/ssc/Apparel logo.png",
    "/ssc/Apparel logo.png",
    "/ssc/nasscom.png",
    "/ssc/Apparel logo.png",
    "/ssc/DWSSC.png",
    "/ssc/healthcare.png",
    "/ssc/construction skill logo.png",
    "/ssc/beauty.png",
  ]

  const partnerImg =[
    "/partners/tnskilldev.gif",
     "/partners/mrdgoi.jpg",
     "/partners/msme.png",
  ]
  const imageUrls = [
    '/associates/pmkvy1.png',
    '/associates/ddugky2.jpeg',
    '/associates/ndlm3.jpg',
    '/associates/nulm4.jpg',
    '/associates/pmkvy1.png',
    '/associates/skillindia.png',
    // Add more image URLs as needed
  ];
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ height: 400 }}>
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      {/* <Paper>
      <Carousel autoPlay={false}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </Carousel>
    </Paper> */}
      </Grid>

      <Grid item xs={12}>
        <Container className={styles.about} sx={{ pt: 2 }}>
          <Typography variant="h4" sx={{ color: "primary.main" }}>
            About Indra Educational & Charitable Trust
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            Indra Educational and Charitable Trust Skill Development program
            provides youth with a wide range of unique skill building
            experiences including leadership, social, communication, computers
            and basic life skills. The Short-term training program is given in
            Apparel Sector to the youth of age group of 18 to 45 years. Post
            completion of the training program, the dedicated employment team
            ensures that the candidates gets the job in the various Textile
            Units and also enable them for Self Employment. Furthermore, to
            extend the scope of employment opportunities regular job mapping
            activity is performed at center levle to increase hiring parter
            support system and explore new job opportunities
          </Typography>
          <Button variant="contained">Enquiry</Button>
        </Container>
      </Grid>

      <Container sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4}>
            <Card
              sx={{
                height: 250,
                p: 2,
                textAlign: "center",
                minHeight: 200,
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Typography variant="h5">
                  Interview Scheduled Mission
                </Typography>
                <Typography variant="body1">
                  To provide life-changing apprenticeships to youth in
                  underserved communities across India and uplift their
                  livelihood
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card
              sx={{
                height: 250,
                p: 2,
                textAlign: "center",
                minHeight: 200,
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Typography variant="h5">
                  Skill Development & Training
                </Typography>
                <Typography variant="body1">
                  Provide Quality Education to all the category of the people of
                  rural especially to the underprivileged weakers sections of
                  the society.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card
              sx={{
                height: 250,
                p: 2,
                textAlign: "center",
                minHeight: 200,
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Typography variant="h5">Kaushal Melas</Typography>
                <Typography variant="body1">
                  Indira Skills arranged many events for Awareness programs &
                  Job Melas and has a success rates of Recruitment and
                  Placements
                </Typography>
              </CardContent>
            </Card>
          </Grid>{" "}
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={3} sx={{ p: 5 }}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{ color: "primary.main", textAlign: "center" }}
            >
              Why Choose Us?
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
             className={styles.choose}
              sx={{
                // border: "1px solid black",
                // borderRadius: "5px",
                p: 4,
                textAlign: "center",
                height: 200,
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">CSR Projects</Typography>
              <Typography variant="body1">
                A host of content services at your doorstep and Development
                Projects.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
             className={styles.choose}
              sx={{
                // background:'warm.main',
                // border: "1px solid black",
                // borderRadius: "5px",
                p: 4,
                textAlign: "center",
                height: 200,
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">Corporate Alliance</Typography>
              <Typography variant="body1">
                Recruitment and Staffing solutions for a wide range of JDs in
                various sectors
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
            className={styles.choose}
              sx={{
                // border: "1px solid black",
                // borderRadius: "5px",
                p: 4,
                textAlign: "center",
                height: 200,
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">Campus</Typography>
              <Typography variant="body1">
                Helping school students in nurturing their Vocational skill sets
                for a brighter future.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
             className={styles.choose}
              sx={{
                // border: "1px solid black",
                // borderRadius: "5px",
                p: 4,
                textAlign: "center",
                height: 200,
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">Career Counselling</Typography>
              <Typography variant="body1">
                Implementing placement linked Skill Career Development and
                Project.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
             className={styles.choose}
              sx={{
                // border: "1px solid black",
                // borderRadius: "5px",
                p: 4,
                textAlign: "center",
                height: 200,
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">Government Projects</Typography>
              <Typography variant="body1">
                Implementing placement linked Skill Development Projects for
                various Central.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
             className={styles.choose}
              sx={{
                // border: "1px solid black",
                // borderRadius: "5px",
                p: 4,
                textAlign: "center",
                height: 200,
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">Infrastructure</Typography>
              <Typography variant="body1">
                We have well equipped and good infrastructure for All Training
                Sectors
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Grid item xs={12}>
        <Box
          sx={{
            background: `linear-gradient(to right, #000428, #004e92)`,
            textAlign: "center",
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography variant="h4" sx={{ color: "warm.main" }}>
            Indira Skill Foundation - We Elevate Education & Society
          </Typography>
        </Box>
      </Grid>


      <Container sx={{p:5}}>
      <Grid container spacing={3} >
      <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{ color: "primary.main", textAlign: "center" }}
            >
              Sector Skill Council(SSC)
            </Typography>
          </Grid>
        {sscImg.map((sscImg, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}  >
            <Box className={styles.box}>
            <img src={sscImg} alt={`Image ${index + 1}`} style={{ width:100,height:75 }} /></Box>
          </Grid>
        ))}
      </Grid>
      <Grid container  justifyContent="center" alignItems="center">
      <Divider sx={{ backgroundColor: 'primary.light', height: 2, width: '50%' }} />
    </Grid>
      </Container>
     
      <Divider sx={{ backgroundColor: 'red', height: 2 }} />



      <Container sx={{p:5}}>
      <Grid container spacing={3} >
        <Grid item xs={12} sx={{color:'primary.main',textAlign:'center'}}>
          <Typography variant="h3">
            Our Partners
          </Typography>
        </Grid>
        {partnerImg.map((partnerImg, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}  className={styles.partner} >
            <img src={partnerImg} alt={`Image ${index + 1}`} style={{ width:150,height:100 }} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="center" sx={{pt:4}}>
      <Divider sx={{ backgroundColor: 'primary.light', height: 2, width: '50%' }} />
      </Grid>
      </Container>
      


      <Container sx={{p:3}}>
      <Grid container spacing={3} >
        <Grid item xs={12} sx={{color:'primary.main',textAlign:'center'}}>
          <Typography variant="h3">
            Our Associates
          </Typography>
        </Grid>
        {imageUrls.map((imageUrl, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}  className={styles.partner} >
            <img src={imageUrl} alt={`Image ${index + 1}`} style={{ width:150,height:100 }} />
          </Grid>
        ))}
      </Grid>
      </Container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default HomePage;




      {/* <Container sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{ color: "primary.main", textAlign: "center" }}
            >
              Sector Skill Council(SSC)
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Card className={styles.card}>
              <Image
                src="/ssc/apparel logo.png"
                alt="My Image"
                width={100}
                height={75}
                ></Image>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={styles.card}>
              <Image
                src="/ssc/tourism.png"
                alt="My Image"
                width={100}
                height={75}
                ></Image>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={styles.card}>
              <Image
                src="/ssc/nasscom.png"
                alt="My Image"
                width={100}
                height={75}
                ></Image>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={styles.card}>
              <Image
                src="/ssc/essci.png"
                alt="My Image"
                width={100}
                height={75}
                ></Image>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={styles.card}>
              <Image
                src="/ssc/DWSSC.png"
                alt="My Image"
                width={100}
                height={75}
                ></Image>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={styles.card}>
              <Image
                src="/ssc/healthcare.png"
                alt="My Image"
                width={100}
                height={75}
                ></Image>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={styles.card}>
              <Image
                src="/ssc/construction skill logo.png"
                alt="My Image"
                width={100}
                height={75}
                ></Image>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={styles.card}>
              <Image
                src="/ssc/beauty.png"
                alt="My Image"
                width={100}
                height={75}
                ></Image>
            </Card>
          </Grid>
        </Grid>
      </Container> */}




      {/* <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{ color: "primary.main", textAlign: "center" }}
            >
              Our Partners
            </Typography>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box className={styles.partner} >
              <Image
                src="/partners/tnskilldev.gif"
                alt="My Image"
                width={150}
                height={100}
                ></Image>
            </Box>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box className={styles.partner}>
              <Image
                src="/partners/mrdgoi.jpg"
                alt="My Image"
                width={150}
                height={100}
              ></Image>
            </Box>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box className={styles.partner}>
              <Image
                src="/partners/msme.png"
                alt="My Image"
                width={150}
                height={100}
                ></Image>
            </Box>
          </Grid>
        </Grid>
      </Container> */}