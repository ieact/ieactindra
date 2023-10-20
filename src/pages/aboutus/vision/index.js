import Layout from "@/pages/layout";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const VisionMission = () => {
  return (
    <Layout>
    <Container>
      <Grid container>
        <Grid item xs={12} >
          <Typography variant="h3">Mission Statement:</Typography>
          <Typography variant="body1">
            At Indira Educational charitable Trust, our mission is to provide
            exceptional education and skill development programs that empower
            individuals to achieve their full potential. We are dedicated to
            fostering a learning environment that encourages innovation,
            creativity, and personal growth. Our commitment to excellence
            extends to the following key principles: 1. **Educational
            Excellence:** We strive to offer the highest quality of education
            and training that equips our students with the knowledge and skills
            they need to excel in their chosen fields. 2. **Student-Centered
            Approach:** We put our students at the center of everything we do.
            Our goal is to provide a supportive and inclusive environment that
            ensures every student's success. 3. **Industry Relevance:** We
            maintain a close connection with industry trends, ensuring that our
            programs are up-to-date and aligned with the needs of today's job
            market. 4. **Community Engagement:** We actively engage with the
            community, contributing to its development and supporting local
            initiatives. 5. **Personal Development:** Beyond academic
            achievements, we are committed to nurturing personal growth and
            character development, preparing students for life's challenges.
          </Typography>
          <Typography variant="h3">Vision Statement:</Typography>
          <Typography variant="body1">
            Our vision is to be recognized as a premier training institute known
            for its commitment to excellence, innovation, and holistic
            development. We aspire to: 1. **Leadership in Education:** Be a
            leader in the field of education and skill development, setting the
            standard for quality and innovation. 2. **Global Impact:** Extend
            our reach internationally, fostering partnerships and collaborations
            that benefit students on a global scale. 3. **Diversity and
            Inclusivity:** Create a diverse and inclusive community that
            celebrates differences and promotes a culture of respect and
            understanding. 4. **Lifelong Learning:** Encourage a culture of
            lifelong learning, inspiring students to continually pursue
            knowledge and growth. 5. **Alumni Success:** Measure our success by
            the accomplishments of our alumni, who make a positive impact on
            society and their chosen fields. 6. **Continuous Improvement:**
            Embrace a commitment to continuous improvement, constantly evolving
            to meet the changing needs of our students and the world. These are
            just examples, and you should customize the mission and vision
            statements to reflect the specific goals and values of your training
            institute. Your institute's unique strengths and aspirations should
            be central to your mission and vision statements.
          </Typography>
        </Grid>
      </Grid>
    </Container>
    </Layout>
  );
};

export default VisionMission;
