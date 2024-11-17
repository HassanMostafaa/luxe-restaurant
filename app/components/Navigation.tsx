'use client';
import styled from '@emotion/styled';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { theme } from '../styles/theme';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${theme.colors.background};
  padding: 1rem 2rem;
  backdrop-filter: blur(10px);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${theme.gradients.gold};
  background: ${theme.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'roboto', serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 70%;
    background: ${theme.colors.background};
    padding: 2rem;
    transition: right 0.3s ease;
  }

  @media (min-width: 769px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: block;
    padding: 1rem 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContent>
        <Logo>LUXE</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#featured">Featured</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#locations">Locations</NavLink>
        </NavLinks>
      </NavContent>
    </Nav>
  );
}
