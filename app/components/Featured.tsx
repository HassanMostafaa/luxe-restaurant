'use client';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { featuredDishes } from '../data/restaurants';
import { theme } from '../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing.section} 2rem;
  background: ${theme.gradients.dark};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const Card = styled(motion.div)`
  background: ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  border: 1px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${theme.borderRadius.large};
    padding: 1px;
    background: ${theme.gradients.gold};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }

  box-shadow: ${theme.shadows.gold};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${theme.shadows.goldHover};
  }
`;

const ImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to top, ${theme.colors.secondary}, transparent);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.02);
  }
`;

const Content = styled.div`
  padding: 2rem;
`;

const DishName = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.text};
  margin-bottom: 0.75rem;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
`;

const Description = styled.p`
  color: ${theme.colors.textMuted};
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  font-family: ${theme.fonts.body};
  font-weight: 300;
`;

const Price = styled.span`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  background: ${theme.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Featured() {
  return (
    <Section id="featured">
      <Container>
        <Title>Featured Dishes</Title>
        <Grid>
          {featuredDishes.map((dish) => (
            <Card
              key={dish.id}
              whileHover={{ y: -0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ImageContainer>
                <Image src={dish.image} alt={dish.name} />
              </ImageContainer>
              <Content>
                <DishName>{dish.name}</DishName>
                <Description>{dish.description}</Description>
                <Price>${dish.price}</Price>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
