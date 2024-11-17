"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

const Section = styled.section`
  padding: ${theme.spacing.section} 2rem;
  background: ${theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div``;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: ${theme.colors.muted};
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const StatItem = styled(motion.div)``;

const StatNumber = styled.div`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${theme.colors.muted};
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function About() {
  return (
    <Section id="about">
      <Container>
        <Content>
          <Title>Our Legacy of Excellence</Title>
          <Description>
            For over three decades, we have been crafting extraordinary dining experiences that combine culinary artistry with impeccable service. Our master chefs draw inspiration from global cuisines while maintaining the highest standards of quality and innovation.
          </Description>
          <Stats>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <StatNumber>30+</StatNumber>
              <StatLabel>Years of Excellence</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StatNumber>12</StatNumber>
              <StatLabel>Michelin Stars</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StatNumber>3</StatNumber>
              <StatLabel>Global Locations</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <StatNumber>150+</StatNumber>
              <StatLabel>Expert Chefs</StatLabel>
            </StatItem>
          </Stats>
        </Content>
        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070"
            alt="Restaurant Interior"
          />
        </ImageContainer>
      </Container>
    </Section>
  );
}