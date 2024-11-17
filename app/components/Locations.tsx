'use client';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { restaurants } from '../data/restaurants';
import { theme } from '../styles/theme';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Section = styled.section`
  padding: ${theme.spacing.section} 2rem;
  background: ${theme.gradients.dark};
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
  font-family: 'Playfair Display', serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const LocationCard = styled(motion.div)`
  background: ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  border:1px solid ${theme.colors.primary};
  background-image: ${theme.gradients.gold};
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

const LocationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const LocationContent = styled.div`
  padding: 1.5rem;
  background: ${theme.colors.secondary};
`;

const LocationName = styled.h3`
  font-size: 1.25rem;
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

const LocationAddress = styled.p`
  color: ${theme.colors.muted};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Cormorant Garamond', serif;
`;

const Rating = styled.div`
  color: ${theme.colors.primary};
  font-weight: bold;
`;

const MapWrapper = styled.div`
  height: 400px;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  margin: 3rem 0;
  border: 1px solid transparent;
  background-image: ${theme.gradients.gold};
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

const ContactSection = styled.div`
  text-align: center;
  color: ${theme.colors.text};
  margin-top: 4rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.muted};
  font-family: 'Cormorant Garamond', serif;

  svg {
    color: ${theme.colors.primary};
  }
`;

// Fix for the default marker icon
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const locations = [
  { name: 'Paris', coordinates: [48.8566, 2.3522] },
  { name: 'San Francisco', coordinates: [37.7749, -122.4194] },
  { name: 'Dubai', coordinates: [25.2048, 55.2708] },
];

export default function Locations() {
  return (
    <Section id="locations">
      <Container>
        <Title>Our Locations</Title>
        <Grid>
          {restaurants.map((location) => (
            <LocationCard
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <LocationImage src={location.image} alt={location.name} />
              <LocationContent>
                <LocationName>{location.name}</LocationName>
                <LocationAddress>
                  <MapPin size={16} />
                  {location.location}
                </LocationAddress>
                <Rating>★ {location.rating}</Rating>
              </LocationContent>
            </LocationCard>
          ))}
        </Grid>

        <MapWrapper>
          <MapContainer
            center={[25.2048, 55.2708]}
            zoom={2}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location.coordinates as [number, number]}
                icon={defaultIcon}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </MapWrapper>

        <ContactSection>
          <ContactTitle>Get in Touch</ContactTitle>
          <ContactInfo>
            <ContactItem>
              <Phone size={20} />
              +1 (888) LUXE-999
            </ContactItem>
            <ContactItem>
              <Mail size={20} />
              reservations@luxerestaurants.com
            </ContactItem>
          </ContactInfo>
        </ContactSection>
      </Container>
    </Section>
  );
}
