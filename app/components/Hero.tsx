'use client';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070') center/cover no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.overlay};
  }
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  color: ${theme.colors.text};
  max-width: 800px;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: ${theme.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${theme.colors.text};
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  background: ${theme.gradients.gold};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.background};
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'montserrat', serif;
  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    background: ${theme.gradients.goldHover};
  }
`;

export default function Hero() {
  return (
    <HeroSection id="home">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience Culinary Excellence
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Indulge in a symphony of flavors at our world-renowned luxury
          restaurants
        </Subtitle>
        <CTAButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reserve a Table
        </CTAButton>
      </Content>
    </HeroSection>
  );
}
