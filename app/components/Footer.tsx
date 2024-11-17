"use client";
import styled from "@emotion/styled";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { theme } from "../styles/theme";

const FooterContainer = styled.footer`
  background: ${theme.colors.background};
  padding: 4rem 2rem 2rem;
  color: ${theme.colors.text};
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const Column = styled.div``;

const Logo = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: ${theme.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: ${theme.colors.muted};
  line-height: 1.6;
`;

const Title = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: ${theme.colors.text};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: ${theme.colors.muted};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: ${theme.colors.muted};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Bottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.muted};
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Grid>
          <Column>
            <Logo>LUXE</Logo>
            <Description>
              Experience the pinnacle of fine dining at our world-renowned luxury restaurants.
            </Description>
            <SocialLinks>
              <SocialIcon href="#"><Facebook size={20} /></SocialIcon>
              <SocialIcon href="#"><Instagram size={20} /></SocialIcon>
              <SocialIcon href="#"><Twitter size={20} /></SocialIcon>
            </SocialLinks>
          </Column>

          <Column>
            <Title>Quick Links</Title>
            <List>
              <ListItem><Link href="#home">Home</Link></ListItem>
              <ListItem><Link href="#menu">Menu</Link></ListItem>
              <ListItem><Link href="#about">About Us</Link></ListItem>
              <ListItem><Link href="#locations">Locations</Link></ListItem>
            </List>
          </Column>

          <Column>
            <Title>Contact</Title>
            <List>
              <ListItem>Phone: +1 (888) LUXE-999</ListItem>
              <ListItem>Email: reservations@luxerestaurants.com</ListItem>
              <ListItem>Hours: Mon-Sun: 5:30 PM - 11:00 PM</ListItem>
            </List>
          </Column>

          <Column>
            <Title>Newsletter</Title>
            <Description>
              Subscribe to our newsletter for exclusive updates and special offers.
            </Description>
          </Column>
        </Grid>

        <Bottom>
          © {new Date().getFullYear()} LUXE Restaurants. All rights reserved.
        </Bottom>
      </Content>
    </FooterContainer>
  );
}