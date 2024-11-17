"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { menuCategories } from "../data/restaurants";
import { theme } from "../styles/theme";

const Section = styled.section`
  padding: ${theme.spacing.section} 2rem;
  background: ${theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  position: relative;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const CardImage = styled.div<{ image: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.image}) center/cover no-repeat;
  transition: transform 0.3s ease;

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

const CardContent = styled.div`
  position: relative;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${theme.colors.text};
`;

const CategoryName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ItemCount = styled.span`
  color: ${theme.colors.primary};
`;

export default function Categories() {
  return (
    <Section id="menu">
      <Container>
        <Title>Our Menu Categories</Title>
        <Grid>
          {menuCategories.map((category) => (
            <Card
              key={category.id}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardImage image={category.image} />
              <CardContent>
                <CategoryName>{category.name}</CategoryName>
                <ItemCount>{category.items} Items</ItemCount>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}