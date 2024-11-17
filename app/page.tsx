"use client";
import About from './components/About';
import Categories from './components/Categories';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Locations from './components/Locations';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Categories />
      <Featured />
      <About />
      <Locations />
      <Footer />
    </main>
  );
}