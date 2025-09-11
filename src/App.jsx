import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/about';
import Team from '@/components/Team';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <>
      <Helmet>
        <title>Planning Pros - IT Staff Augmentation & HR Services</title>
        <meta name="description" content="Planning Pros provides expert IT and non-IT staff augmentation services with one-time fee HR solutions. Scale your team efficiently with our professional resources." />
        <meta property="og:title" content="Planning Pros - IT Staff Augmentation & HR Services" />
        <meta property="og:description" content="Planning Pros provides expert IT and non-IT staff augmentation services with one-time fee HR solutions. Scale your team efficiently with our professional resources." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Team />
        <Process />
        <Contact />
        <Footer />
        <Toaster />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;